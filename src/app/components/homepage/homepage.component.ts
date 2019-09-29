import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CakeCategoriesService } from '../../services/cake-categories.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  indexs=[
    {
      name: "For Her",
      src:"../../../assets/for_her.jpg",
      num:30
    },
    {
      name: "For Him",
      src:"../../../assets/for_him.jpg",
      num:14
    },
    {
      name: "For The Little One",
      src:"../../../assets/for_the_little_one.jpg",
      num:26
    },
    {
      name: "Chinese pastry",
      src:"../../../assets/Chinese_cake.jpg",
      num:8
    },
    {
      name: "Cup Cakes",
      src:"../../../assets/cupcake.png",
      num:9
    },
  ];

  indexs3=[
    [
      {
      name: "Golf",
      src:"../../../assets/1.jpg",
      num:130
      },
      {
        name: "Paw Patrol",
        src:"../../../assets/2.jpg",
        num:140
      },
      {
        name: "Pink",
        src:"../../../assets/3.jpg",
        num:100
      },
      {
        name: "Spider Man",
        src:"../../../assets/4.jpg",
        num:180
      },
    ],[
      {
        name: "Mermaid",
        src:"../../../assets/5.jpg",
        num: 160
      },
      {
        name: "Princess",
        src:"../../../assets/6.jpg",
        num:190
      },
      {
        name: "Mario",
        src:"../../../assets/7.jpg",
        num:130
      },
      {
        name: "heart & macaroon",
        src:"../../../assets/8.jpg",
        num:100
      },
    ],[
      {
        name: "Doraemon",
        src:"../../../assets/9.jpg",
        num:200
      },
    ]
  ];


  images = [1, 2, 3].map(() => `https://picsum.photos/1110/500?random&t=${Math.random()}`);

  constructor( private router: Router ) { }

  ngOnInit() {
    console.log(this.indexs3.length);
  }

  onClickCard() {
    console.log("Card Clicked!")
    // this.router.navigateByUrl("/Gallery")
  }

  onShowDetail() {
    this.router.navigateByUrl("/Gallery/product-detail")
  }



  










}


