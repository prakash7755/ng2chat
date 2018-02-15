import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


const apiURT: String = 'http://localhost:8000/api';


@Injectable()
export class UserServiceService {

  constructor( private http: HttpClient) {
  }

  createUser(user) {
    return this.http
      .post(apiURT + '/signup', user)
      .toPromise()
      .then((data: any) => {
        localStorage.setItem('token', data.token);
        return data
      })
      .catch(err => {
        console.log('Create User err-', err)
      })
  }



  loginUser(user){
    return this.http
            .post(apiURT + '/login', user)
            .toPromise()
            .then((data:any) =>{
              localStorage.setItem('token', data.token)
              return data
            })
            .catch(err =>{
              console.log('login user error- ', err )
            })
  }

}
