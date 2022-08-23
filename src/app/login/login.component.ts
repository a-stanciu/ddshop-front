import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private user: any;
  private token: any;

  constructor(private authenticationService: AuthenticateService, private router: Router) { }

  login() {
    this.user = {
      "username": (document.getElementById("email") as HTMLInputElement).value,
      "password": (document.getElementById("password") as HTMLInputElement).value
    }

    if (this.authenticationService.checkRequiredFields(this.user) == false) {
      return;
    }

    this.authenticationService.authenticate(this.user).subscribe(
      result => {
        console.log(result);
        this.token = result;
      },
      error => {
        console.error(error);
        alert("Server error.\n" + error.message);
      },
      () => {
        alert("User authentecated successfully.");
        this.authenticationService.storeToken(this.token);
        this.router.navigateByUrl("/");
      }
    );
  }

  ngOnInit(): void {
  }

}
