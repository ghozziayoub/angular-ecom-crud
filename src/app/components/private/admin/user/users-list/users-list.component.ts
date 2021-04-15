import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [
    {
      id: 1,
      name: "foulen",
      age: 33
    },
    {
      id: 2,
      name: "falten",
      age: 35
    },
    {
      id: 3,
      name: "foulena",
      age: 39
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
