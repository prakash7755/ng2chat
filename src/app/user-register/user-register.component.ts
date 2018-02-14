import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service/user-service.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public user
  constructor(public location: Location, private userServ: UserServiceService) {
    this.user = {};
  }

  newUser() {
    if (this.user.password === this.user.coPassword) {
      this.userServ.createUser(this.user)
      .then((data:any) => {
             this.location.go('chat')
       })
       .catch(err => {
        console.log('login user error ', err)
       })
    } else {
      console.log('user password and Confirm password Wrong')
    }
  }


  ngOnInit() {}

}
