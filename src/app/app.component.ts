import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name = "Tunis"

  public book: any = {
    title: "Learn Angular in 2 days",
    price: 0
  }

  public users = ['sirine', 'adel', 'taher', 'nadhem', 'khawla', 'amel', 'yosra']

  deleteUser(theuser: string): void {
    console.log(theuser);
    
    this.users.splice(
      this.users.indexOf(theuser), 1
    )
  }

}
