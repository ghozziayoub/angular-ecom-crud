import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class CategoryAddComponent implements OnInit {

  public addCategoryForm: FormGroup

  constructor(
    fb: FormBuilder,
    private cs: CategoryService,
    private router: Router) {

    let addCategoryFormControls = {
      libele: new FormControl('', [
        Validators.required,
      ]),
    }

    this.addCategoryForm = fb.group(addCategoryFormControls)

  }

  ngOnInit(): void {
  }

  get mylibele() { return this.addCategoryForm.get('libele') }

  addCategory() {

    let data = this.addCategoryForm.value

    //envoi data vers API
    this.cs.addCategory(data).subscribe(
      (result) => {
        this.router.navigateByUrl('/admin/category/list')
      }
      ,
      (error) => { console.log(error) }
    )

  }


}
