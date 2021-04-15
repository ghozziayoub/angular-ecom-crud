import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class CategoriesListComponent implements OnInit {

  public categories = []

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.displayAllCategories()
  }

  displayAllCategories() {
    this.categoryService.getAllCategories()
      .subscribe(
        result => this.categories = result,
        err => console.log(err)
      )
  }

  deleteCategory(category, indice) {
    this.categories.splice(indice, 1)

    this.categoryService.deleteCategory(category.id)
      .subscribe(
        result => this.displayAllCategories(),
        err => console.log(err)

      )
  }



}
