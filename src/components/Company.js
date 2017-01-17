class Company {
    constructor(name, sid, email, handle) {
        this.name = name;
        this.sid = sid;
        this.email = email;
        this.handle = handle;
    }
    get json() {
        return this.toJSON();
    }
    toJSON() {
      const {name, sid, email, handle} = this
      return {name: name, sid: sid, email: email, handle: handle}
    }
    toString() {
        return `${JSON.stringify(this.json)}`;
    }
}
