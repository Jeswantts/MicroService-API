import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticatorService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthenticatorService,private route:Router) { }
  ngOnInit() {
    
  }

  login(email: string, password: string): void {
    this.authService.User(email, password).subscribe(
      (Response) => {
       alert("Successfully Logged In",)
       this.route.navigate(['/home'])
      },
      error => {
        alert("InValid Credentials")
      }
    );
  }

  logout() {
    if(this.authService.getToken())
    this.authService.clearToken();
    alert("Logged Out Successfully");
    this.route.navigate(['/login'])
  }
  

}
