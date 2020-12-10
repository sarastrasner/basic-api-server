'use strict';

class Cats {

  constructor() {
    this.id = 0;
    this.db = []
  }

  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }
  //  ^^^^ working!

  create(obj) {
    console.log(obj);
    // let record = {
    //   id: ++this.id,
    //   record: obj
    // }
    obj.id = ++ this.id;
    this.db.push(obj);
    // this.db.push(record)
    // return record;
    return obj;
  }

  /// ^^ working!

  update(id, obj) {
    if (id) {
      const target = this.db.find(record => record.id === id);
      const source = obj;
      Object.assign(target, source);
      // const index = this.db.indexOf(id);
      // this.db.splice(index,1,obj);
      return target;
    }
  }

  // ^^^^^ working!!!

  delete(id) {
    if (id) {
      this.db = this.db.filter(record => record.id !== id)
    }
    return null;
  }
  // ^^^ working!
}

module.exports = Cats;
