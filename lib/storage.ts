const DB_NAME = 'nsc_dashboard_db'
const DB_VERSION = 1
const STORE_NAME = 'csv_data'

interface StoredData {
  nscData: unknown[] | null
  visitasData: unknown[] | null
  nscFileName: string | null
  visitasFileName: string | null
  selectedHub: string
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
  })
}

export async function saveData(data: StoredData): Promise<void> {
  try {
    const db = await openDB()
    const transaction = db.transaction(STORE_NAME, 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    
    await new Promise<void>((resolve, reject) => {
      const request = store.put({ id: 'main', ...data })
      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
    
    db.close()
  } catch (error) {
    console.error('Erro ao salvar dados:', error)
  }
}

export async function loadData(): Promise<StoredData | null> {
  try {
    const db = await openDB()
    const transaction = db.transaction(STORE_NAME, 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    
    const result = await new Promise<StoredData | null>((resolve, reject) => {
      const request = store.get('main')
      request.onsuccess = () => resolve(request.result || null)
      request.onerror = () => reject(request.error)
    })
    
    db.close()
    return result
  } catch (error) {
    console.error('Erro ao carregar dados:', error)
    return null
  }
}

export async function clearData(): Promise<void> {
  try {
    const db = await openDB()
    const transaction = db.transaction(STORE_NAME, 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    
    await new Promise<void>((resolve, reject) => {
      const request = store.delete('main')
      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
    
    db.close()
  } catch (error) {
    console.error('Erro ao limpar dados:', error)
  }
}
