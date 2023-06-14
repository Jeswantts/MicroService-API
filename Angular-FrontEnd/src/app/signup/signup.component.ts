import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private serv:ApiService,private router: Router){}
  // user = {
  //   username: '',
  //   email: '',
  //   mobile: '',
  //   agree: false
  // };
  nuser:User={
    id:0,
    userName:'',
    email:'',
    password:'',
    mobile:0
  }


  // onSubmit() {
  //   if (this.signupForm.valid) {
  //     // Perform signup logic here
  //     console.log('Signup successful!');
  //   } else {
  //     // Mark form as submitted to display validation errors
  //     this.signupForm.control.markAllAsTouched();
  //   }
  // }

  post(){
    this.serv.addUser(this.nuser).subscribe(_climate=>{
      alert("User added successfully")
      this.router.navigate(['/login'])
      
    })
  }

}
