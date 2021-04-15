import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories = []
  public products = []

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.displayAllCategories()
    this.displayAllProducts()
  }

  displayAllCategories() {
    this.categoryService.getAllCategories()
      .subscribe(
        result => this.categories = result,
        err => console.log(err)
      )
  }

  displayAllProducts() {
    this.productService.getAllProducts()
      .subscribe(
        result => this.products = result,
        err => console.log(err)
      )
  }

}
