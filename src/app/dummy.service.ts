// import { Injectable } from '@angular/core';

// @Injectable()
export class DummyService {

  private name: string = 'Nik';

  getName() {
    return this.name;
  }

  getNameAsync(param) {
    return Promise.resolve(param);
  }

  setName(name: string) {
    this.name = 'Nik';
  }

  constructor() { }

}
