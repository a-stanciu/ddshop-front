import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormUtilService } from './form-util.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url: string = "http://localhost:8080/api/user/register"

  constructor(private http: HttpClient, private formUtil: FormUtilService) { }

  checkRequiredFields(user: any): boolean {
    if (user.firstName == "") {
      this.formUtil.alertFieldRequired("First name");
      return false;
    }

    if (user.lastName == "") {
      this.formUtil.alertFieldRequired("Last name");
      return false;
    }

    if (user.email == "") {
      this.formUtil.alertFieldRequired("Email address");
      return false;
    }

    if (!this.formUtil.validateEmail(user.email)) {
      alert("Email is not correct");
      return false;
    }

    if (user.phoneNumber == "") {
      this.formUtil.alertFieldRequired("Phone number");
      return false;
    }

    if (user.password == "") {
      this.formUtil.alertFieldRequired("Password");
      return false;
    }

    if (user.password != user.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  }

  addUser(user: any): Observable<any> {
      const headers = { 
        'content-type': 'application/json'
      }
      
      return this.http.post(this.url, user, { 'headers': headers });
  }
}
