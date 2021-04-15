import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class CategoryUpdateComponent implements OnInit {

  public updateCategoryForm: FormGroup

  constructor(
    fb: FormBuilder,
    private cs: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {

    let updateCategoryFormControls = {

      libele: new FormControl('', [
        Validators.required,
      ]),
      id: new FormControl('', [
        Validators.required,
      ]),
    }

    this.updateCategoryForm = fb.group(updateCategoryFormControls)

  }

  ngOnInit(): void {
    let idCategory = this.route.snapshot.paramMap.get('id')
    this.cs.getOneCategory(idCategory)
      .subscribe(
        res => this.updateCategoryForm.patchValue({ libele: res.libele, id: res.id }),
        err => console.log(err)
      )

  }

  get mylibele() { return this.updateCategoryForm.get('libele') }

  updateCategory() {

    let data = this.updateCategoryForm.value
    console.log(data);

    //envoi data vers API
    this.cs.updateCategory(data).subscribe(
      (result) => {
        this.router.navigateByUrl('/admin/category/list')
      }
      ,
      (error) => { console.log(error) }
    )

  }
}
