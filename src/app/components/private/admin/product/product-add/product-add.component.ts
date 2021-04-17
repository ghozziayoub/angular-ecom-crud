import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class ProductAddComponent implements OnInit {

  public addProductForm: FormGroup
  public categories = []

  constructor(
    fb: FormBuilder,
    private ps: ProductService,
    private cs: CategoryService,
    private router: Router) {

    let addProductFormControls = {
      nom: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      prix: new FormControl('', [
        Validators.required,
      ]),
      image: new FormControl('', [
        Validators.required,
      ]),
      categorieId: new FormControl('', [
        Validators.required,
      ]),
    }

    this.addProductForm = fb.group(addProductFormControls)

  }

  ngOnInit(): void {
    this.displayAllCategories()
  }

  displayAllCategories() {
    this.cs.getAllCategories()
      .subscribe(
        result => this.categories = result,
        err => console.log(err)
      )
  }
  addProduct() {

    let data = this.addProductForm.value
    let id = this.addProductForm.value.categorieId

    delete data.categorieId

    //envoi data vers API
    this.ps.addProduct(data, id).subscribe(
      (result) => {
        this.router.navigateByUrl('/admin/product/list')
      }
      ,
      (error) => { console.log(error) }
    )

  }


}
