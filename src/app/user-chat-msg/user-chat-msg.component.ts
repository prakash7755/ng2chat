import { Component, OnInit } from '@angular/core';
import { ChatAppServiceService } from '../services/chat-app-service/chat-app-service.service';


@Component({
  selector: 'app-user-chat-msg',
  templateUrl: './user-chat-msg.component.html',
  styleUrls: ['./user-chat-msg.component.css']
})
export class UserChatMsgComponent implements OnInit {
  public user
  public items
  constructor(private userServ:ChatAppServiceService ) { 
  	this.user = {};
  	this.items = {};
  }
    
    chatUser(){
       this.userServ.chatMsg(this.user)
       .then((data: any)=> {
          this.items = ( data || {}).data
          console.log(this.items)
       })
       .catch(err => {
       	console.log('chat error -', err)
       })
    }



  ngOnInit() {
  }

}
