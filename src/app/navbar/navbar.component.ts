import { Component, Input, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { JwtUtilService } from '../services/jwt-util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartCounter = 0;

  isHidden = true;

  email = "My account";
  
  constructor(private authenticationService: AuthenticateService, private jwtUtil: JwtUtilService) { }

  ngOnInit(): void {
    this.email = this.jwtUtil.getEmail(localStorage.getItem('jwt') as string) as string;
  }

  increaseCounter() {
    this.cartCounter++;
  }

  decreaseCounter() {
    this.cartCounter--;
  }

  resetCounter() {
    this.cartCounter = 0;
  }

  toggleSearch() {
    this.isHidden = !this.isHidden;
    document.getElementById("searchbox")?.focus(); // nu merge
  }

  logout() {
    this.authenticationService.deleteToken();
    document.location.reload();
  }


}
