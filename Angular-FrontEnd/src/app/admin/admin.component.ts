import { Component } from '@angular/core';
import { AuthenticatorService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private authService: AuthenticatorService,private route:Router) { }
  ngOnInit() {
    
  }

  Admin(adminName: string, adminPassword: string): void {
    this.authService.Admin(adminName,adminPassword).subscribe(
      (Response) => {
       alert("Admin Successfully Logged In",)
       this.route.navigate(['/adminhome'])
      },
      error => {
        alert("InValid Credentials")
      }
    );
  }

  

}
