import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';
import { AuthenticatorService } from '../authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  public data:User[]=[]
  constructor(private dataService: ApiService, private authService:AuthenticatorService,private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getUser().subscribe((response: any) => {
      this.data = response;
    });
  }
  
  deleteData(id: number): void {
    this.dataService.deleteUser(id).subscribe(() => {
      alert("Successfully Deleted")
      this.loadData();
    });
  }

  logout() {
    if(this.authService.getToken())
    this.authService.clearToken();
    alert("Logged Out Successfully");
    this.router.navigate(['/admin'])
  }

}
