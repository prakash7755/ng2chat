import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';


const apiURT: String = 'http://localhost:8000/api/chat';


@Injectable()
export class ChatAppServiceService {
   private headers;
    constructor(private http: HttpClient) { 
   this.headers = {};
  }
  sendMessage(data){
    let token = localStorage.token;
    if (token) {
      this.headers.Authorization = token
    }
     return this.http
           .post(apiURT + '/user', data,  this.headers )
           .toPromise()
           .then((data: any) =>{
           	return data || {};
           })
           .catch(err => {
           	console.log('chat error - ', err)
           })
  }

}

