import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class ProductUpdateComponent implements OnInit {

  public updateProductForm: FormGroup
  public categories = []
  public product

  constructor(
    fb: FormBuilder,
    private ps: ProductService,
    private cs: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {

    let updateProductFormControls = {
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
      categorie: new FormControl('', [
        Validators.required,
      ]),
      id: new FormControl('', [
        Validators.required,
      ]),
    }

    this.updateProductForm = fb.group(updateProductFormControls)

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.ps.getOneProduct(id)
      .subscribe(
        res => {
          this.product = res

          this.updateProductForm.patchValue({
            nom: res.nom,
            image: res.image,
            description: res.description,
            prix: res.prix,
            id: res.id,
            categorie: res.categorie
          })

        }
      )
    this.displayAllCategories()
  }

  displayAllCategories() {
    this.cs.getAllCategories()
      .subscribe(
        result => this.categories = result,
        err => console.log(err)
      )
  }

  updateProduct() {

    let data = this.updateProductForm.value
    let id = this.updateProductForm.value.categorie

    delete data.categorie
    
    //envoi data vers API
    this.ps.updateProduct(data, id).subscribe(
      (result) => {
        this.router.navigateByUrl('/admin/product/list')
      }      ,
      (error) => { console.log(error) }
    )

  }

}
