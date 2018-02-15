import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


const apiURT: String = 'http://localhost:8000/api/chat';


@Injectable()
export class ChatAppServiceService {

  constructor(private http: HttpClient) { }

  chatMsg(data){
     return this.http
           .post(apiURT + '/user', data)
           .toPromise()
           .then((data: any) =>{
           	console.log(data)
           	return data || {};
           })
           .catch(err => {
           	console.log('chat error - ', err)
           })
  }

}
