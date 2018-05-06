import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_auth';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  loginForm: FormGroup


  constructor( private router: Router, 
               private fb: FormBuilder,
               private authenticationService : AuthenticationService ) { 
    this.loginForm = fb.group({
      defaultFormUser: ['', Validators.required],
      defaultFormPass: ['', Validators.required, Validators.minLength(6)]
    });
  }

  ngOnInit() {
    this,this.authenticationService.logout();
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(result => {
          if (result === true) {
            this.router.navigate([('/')]);
          } else {
            this.error = 'Usuário ou senha estão incorretos';
            this.loading = false;
          }
        });
  }

}
