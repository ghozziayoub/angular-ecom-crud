import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', './../../../../../assets/css/sb-admin-2.css']
})
export class SidebarComponent implements OnInit {

  public isAdmin : Boolean
  public isClient : Boolean

  constructor(private as : AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.as.isLoggedAdmin()
    this.isClient = this.as.isLoggedClient()
  }

}
