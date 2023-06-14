import { Component } from '@angular/core';
import { Property } from '../property';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent {
  public property?:Property[]
  constructor(private serv:ApiService,private router:Router){}
  nproperty:Property={
    propertyId: 0,
    agentId: 0,
    propertyName: '',
    propertyPrice: 0,
    propertyLocation: '',
    propertyBHK: '',
    propertyStatus: '',
    propertyType: '',
    propertyReside: ''
  }

  post(){
    this.serv.addProperty(this.nproperty).subscribe(_climate=>{
      alert("Inserted")
      this.router.navigate(['/property'])
    })
  }

}
