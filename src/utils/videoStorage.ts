const DB_NAME = 'MariemPortfolioDB'
const DB_VERSION = 1
const STORE_NAME = 'project_videos'

interface StoredVideoRecord {
  projectId: string
  blob: Blob
  name: string
  size: number
  type: string
  updatedAt: number
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'))
      return
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'projectId' })
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function saveVideo(
  projectId: string,
  file: File
): Promise<{ url: string; name: string; size: number }> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)

    const record: StoredVideoRecord = {
      projectId,
      blob: file,
      name: file.name,
      size: file.size,
      type: file.type || 'video/mp4',
      updatedAt: Date.now(),
    }

    const request = store.put(record)

    request.onsuccess = () => {
      const url = URL.createObjectURL(file)
      resolve({ url, name: file.name, size: file.size })
    }

    request.onerror = () => reject(request.error)
  })
}

export async function getVideo(
  projectId: string
): Promise<{ url: string; name: string; size: number } | null> {
  try {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly')
      const store = tx.objectStore(STORE_NAME)
      const request = store.get(projectId)

      request.onsuccess = () => {
        const record = request.result as StoredVideoRecord | undefined
        if (!record || !record.blob) {
          resolve(null)
          return
        }
        const url = URL.createObjectURL(record.blob)
        resolve({
          url,
          name: record.name,
          size: record.size,
        })
      }

      request.onerror = () => reject(request.error)
    })
  } catch {
    return null
  }
}

export async function deleteVideo(projectId: string): Promise<void> {
  try {
    const db = await openDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      const request = store.delete(projectId)

      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
  } catch {
    // Graceful no-op on failure
  }
}
