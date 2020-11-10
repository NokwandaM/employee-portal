import { Component, OnInit } from '@angular/core';
import { Categoties } from '../categoties';
import { CategotiesService } from '../categoties.service';
import { CategotiesComponent } from '../categoties/categoties.component';

@Component({
  selector: 'app-new-categoty',
  templateUrl: './new-categoty.component.html',
  styleUrls: ['./new-categoty.component.css']
})
export class NewCategotyComponent implements OnInit {
  categoryName
  category:Categoties

  constructor(public categoryService:CategotiesService,) { }

  ngOnInit(): void {
  }


  save(){
    this.category = new Categoties(this.categoryName)
    console.log(this.category);
    
    this.categoryService.saveCategory(this.category)
  }

}
