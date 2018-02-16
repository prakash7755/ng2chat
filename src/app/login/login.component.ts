import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service/user-service.service';
import { Location } from '@angular/common';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;

  constructor(private location: Location, private userServ: UserServiceService) { 
      this.user = {};
  }
   
     verifyUser(){
     	 this.userServ.loginUser(this.user)
     	 .then((data:any) => {
             this.location.go('chat')
     	 })
     	 .catch(err => {
     	 	console.log('login user error ', err)
     	 })
     }
  ngOnInit() {
  }

}
