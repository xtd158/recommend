export default class Store {

  db
  name = 'games'
  version = 1
  objectStore

  constructor() {
    let request = window.indexedDB.open(this.name, this.version);
    request.onupgradeneeded = this.onupgradeneeded
    request.onerror = this.onerror
    request.success = this.success
  }

  onupgradeneeded(event) {
    this.db = event.target.result
    if (!this.db.objectStoreNames.contains(this.name)) {
      this.objectStore = this.db.createObjectStore('list', {autoIncrement: true})
      this.objectStore.createIndex('chinese_name', 'chinese_name', {unique: true});
      this.objectStore.createIndex('english_name', 'english_name', {unique: true});
      this.objectStore.createIndex('alias', 'alias', {unique: false});
      this.objectStore.createIndex('number_of_people', 'number_of_people', {unique: false});
      this.objectStore.createIndex('game_type', 'game_type', {unique: false});
      this.objectStore.createIndex('language', 'language', {unique: false});
      this.objectStore.createIndex('crowd', 'crowd', {unique: false});
      this.objectStore.createIndex('attributes', 'attributes', {unique: false});
      this.objectStore.createIndex('cover_url', 'cover_url', {unique: true});
      this.objectStore.createIndex('cover', 'cover', {unique: true});
    }
  }

  onerror(event) {

  }

  success(event) {

  }
}
