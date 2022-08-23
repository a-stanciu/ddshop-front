import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: any;

  constructor(private registerService: RegisterService, private router: Router) {  }

  register() {
    this.user = {
      firstName: (document.getElementById("firstName") as HTMLInputElement).value,
      lastName: (document.getElementById("lastName") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      phoneNumber: (document.getElementById("phoneNumber") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      confirmPassword: (document.getElementById("confirmPassword") as HTMLInputElement).value
    }

    if (this.registerService.checkRequiredFields(this.user) == false) {
      return;
    }

    this.registerService.addUser(this.user).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.error(error);
        alert("Server error, please try again later.\n" + error.message);
      },
      () => {
        alert("Registration successful. You will now be redirected to the login page.");
        this.router.navigateByUrl("/login");
      }
    );
  }

  ngOnInit(): void {
  }

}
