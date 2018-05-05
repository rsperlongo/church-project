import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor( private fb: FormBuilder) { 
    this.loginForm = fb.group({
      defaultFormUser: ['', Validators.required],
      defaultFormPass: ['', Validators.required, Validators.minLength(6)]
    })
  }

  ngOnInit() {
  }

}
