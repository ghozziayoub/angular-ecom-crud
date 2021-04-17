import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class UsersListComponent implements OnInit {
  public users = []

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.displayAllUsers()
  }

  displayAllUsers() {
    this.userService.getAllUtilisateurs()
      .subscribe(
        result => this.users = result,
        err => console.log(err)
      )
  }

  deleteUser(user, indice) {
    this.users.splice(indice, 1)

    this.userService.deleteUtilisateur(user.id)
      .subscribe(
        result => this.displayAllUsers(),
        err => console.log(err)
      )
  }

}
