import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let catpics = [
      { id: '1591715036975', image: "cat001.jpg", caption: "A picture of a cat 1" },
      { id: '1591715036976', image: "cat002.jpg", caption: "A picture of a cat 2" },
      { id: '1591715036976', image: "cat003.jpg", caption: "A picture of a cat 3" },
      { id: '1591715036976', image: "cat001.jpg", caption: "Another picture of a cat 1" },
      { id: '1591715036977', image: "cat002.jpg", caption: "Another picture of a cat 2" },
      { id: '1591715036978', image: "cat003.jpg", caption: "Another picture of a cat 3" },
      { id: '1591715036979', image: "cat003.jpg", caption: "This is a cat 3" },
      { id: '1591715036980', image: "cat002.jpg", caption: "This is a cat 2" },
      { id: '1591715036981', image: "cat001.jpg", caption: "This is a cat 1" }

    ];
    return { catpics };
  }

}
