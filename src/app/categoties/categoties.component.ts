import { Component, OnInit } from '@angular/core';
import { CategotiesService } from '../categoties.service';

@Component({
  selector: 'app-categoties',
  templateUrl: './categoties.component.html',
  styleUrls: ['./categoties.component.css']
})
export class CategotiesComponent implements OnInit {
  categories :any
  constructor( public categoryService:CategotiesService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
    this.categoryService.getCat()
  }

}
