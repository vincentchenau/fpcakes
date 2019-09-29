import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakeCategoriesService {

  constructor() { }

  getCakes() {
    return [
      {
        id:1,
        name: "Golf",
        src:"../../../assets/1.jpg",
        type: 1,
        price: 150
      },
      {
        id:2,
        name: "Paw Patrol",
        src:"../../../assets/2.jpg",
        type: 2,
        price:140
      },
      {
        id:3,
        name: "Pink",
        src:"../../../assets/3.jpg",
        type: 3,
        price:100
      },
      {
        id:4,
        name: "Spider Man",
        src:"../../../assets/4.jpg",
        type: 4,
        price:180
      },
      {
        id:5,
        name: "Mermaid",
        src:"../../../assets/5.jpg",
        type: 5,
        price: 160
      },
      {
        id:6,
        name: "Princess",
        src:"../../../assets/6.jpg",
        type: 1,
        price:190
      },
      {
        id:7,
        name: "Mario",
        src:"../../../assets/7.jpg",
        type: 2,
        price:130
      },
      {
        id:8,
        name: "heart & macaroon",
        src:"../../../assets/8.jpg",
        type: 3,
        price:100
      },
      {
        id:9,
        name: "Doraemon",
        src:"../../../assets/9.jpg",
        type: 4,
        price:200
      },
    ]
  };

  getCategoryList() {
    return [
      "For Him",
      "For Her",
      "For The Little One",
      "Chinese Pastry",
      "Cup Cakes"
    ]
  }

}
