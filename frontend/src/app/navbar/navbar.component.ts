import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router,
    public hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogOut(){
    sessionStorage.clear();
  }

}
