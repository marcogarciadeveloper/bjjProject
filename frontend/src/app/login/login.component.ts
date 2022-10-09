import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private router: Router,
  public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    console.log('Marco -> started')
  }
  
  username = '';
  password = '';
  errorMessage ='Invalid Credentials';
  invalidCredentials = false;

  handleRegistration(){
this.router.navigate(['register']);
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      this.router.navigate(['home', this.username]);
      console.log('logged in');
      this.invalidCredentials = false;
      this.username = '';
      this.password = '';
    }
    else {
    this.invalidCredentials = true;
    }
  } 
  

}
