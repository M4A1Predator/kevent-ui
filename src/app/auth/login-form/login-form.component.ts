import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { LoginForm } from './LoginForm';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.styl'],
})
export class LoginFormComponent implements OnInit {
  credential: LoginForm
  @Output()
  login: EventEmitter<LoginForm> = new EventEmitter<LoginForm>()

  constructor() {
    this.credential = new LoginForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.login.emit(this.credential)
  }

}
