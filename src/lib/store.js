export default class Store {

  db
  storeName = 'games'
  tableName = 'list'
  version = 1
  objectStore

  constructor() {
    this.request = indexedDB.open(this.storeName, this.version);
    this.request.onupgradeneeded = this.onupgradeneeded
    this.request.onerror = this.onerror
    this.request.onsuccess = this.onsuccess
  }

  onupgradeneeded = (event) => {
    this.db = event.target.result
    if (!this.db.objectStoreNames.contains(this.storeName)) {
      this.objectStore = this.db.createObjectStore(this.tableName, {autoIncrement: true})
      this.objectStore.createIndex('chinese_name', 'chinese_name', {unique: true})
      this.objectStore.createIndex('english_name', 'english_name', {unique: true})
      this.objectStore.createIndex('alias', 'alias', {unique: false})
      this.objectStore.createIndex('number_of_people', 'number_of_people', {unique: false})
      this.objectStore.createIndex('game_type', 'game_type', {unique: false})
      this.objectStore.createIndex('language', 'language', {unique: false})
      this.objectStore.createIndex('crowd', 'crowd', {unique: false})
      this.objectStore.createIndex('attributes', 'attributes', {unique: false})
      this.objectStore.createIndex('cover_url', 'cover_url', {unique: true})
      this.objectStore.createIndex('cover', 'cover', {unique: true})
    } else {
      this.objectStore = this.db.objectStore(this.tableName)
    }
  }

  onerror(event) {

    console.log('失败')
  }

  onsuccess = (event) => {
    this.db = this.request.result
  }

  add = (data) => {
    let request = this.db.transaction([this.tableName], 'readwrite')
      .objectStore(this.tableName)
      .add(data)
  }
}
