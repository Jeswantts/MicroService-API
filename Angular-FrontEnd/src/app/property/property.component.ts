import { Component } from '@angular/core';
import { Property } from '../property';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  public property?:Property[]
  constructor(private serv:ApiService,private router: Router){}
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    return this.serv.getProperty().subscribe(data=>this.property=data)
  }

  delete(id:number){
    this.serv.deleteProperty(id).subscribe(
      ()=>{
        alert("DEleted")
        this.router.navigate(['/property'])
      }
    )
  }

  put(id:number){
    this.router.navigate(['/property/update',id])
  }
}
