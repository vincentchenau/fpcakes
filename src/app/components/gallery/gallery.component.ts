import { Component, OnInit } from '@angular/core';
import { CakeCategoriesService } from '../../services/cake-categories.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  cakes;
  catList;
  isHidden=[
    false,
    false,
    false,
    false,
    false,
  ]
  constructor( 
    private router: Router,
    private cakeCategoriesService: CakeCategoriesService
  ) { }

  ngOnInit() {
    this.cakes = this.cakeCategoriesService.getCakes();
    this.catList = this.cakeCategoriesService.getCategoryList();
  }

  onShowAll() {
    this.isHidden = [
      false,
      false,
      false,
      false,
      false,
    ]
  }

  onShowX(i) {
    this.isHidden = [
      true,
      true,
      true,
      true,
      true,
    ]
    this.isHidden[i] = !this.isHidden[i]
  }

  onShowDetail() {
    this.router.navigateByUrl("/Gallery/product-detail")
  }

}
