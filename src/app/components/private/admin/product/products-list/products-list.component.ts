import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css','./../../../../../../assets/css/sb-admin-2.css']
})
export class ProductsListComponent implements OnInit {

  public products = []

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.displayAllCategories()
  }

  displayAllCategories() {
    this.productService.getAllProducts()
      .subscribe(
        result => this.products = result,
        err => console.log(err)
      )
  }

  deleteProduct(product, indice) {
    this.products.splice(indice, 1)

    this.productService.deleteProduct(product.id)
      .subscribe(
        result => this.displayAllCategories(),
        err => console.log(err)

      )
  }


}
