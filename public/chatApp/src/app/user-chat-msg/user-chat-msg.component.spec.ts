import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatMsgComponent } from './user-chat-msg.component';

describe('UserChatMsgComponent', () => {
  let component: UserChatMsgComponent;
  let fixture: ComponentFixture<UserChatMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChatMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
