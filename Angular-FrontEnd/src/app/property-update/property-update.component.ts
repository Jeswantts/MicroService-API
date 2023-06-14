import { Component } from '@angular/core';
import { Property } from '../property';
import { ApiService } from '../api.service';
import { Agent } from '../agent';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-property-update',
  templateUrl: './property-update.component.html',
  styleUrls: ['./property-update.component.css']
})
export class PropertyUpdateComponent {

  public property?:Property[]
  constructor(private serv:ApiService,private route:ActivatedRoute,private router:Router){}
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


  propertyId!:0


  ngOnInit():void{
    {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const propertyId = Number(params.get('id'));
        // Call the service method to fetch the reader by ID and update the form
        this.serv.getPropertyById(propertyId).subscribe(
          (reade: Property) => {
            this.nproperty = reade;
          },
          (error) => {
            console.error('Error retrieving reader:', error);
          }
        );
      });
    }
  }
  put(){
    this.serv.updateProperty(this.propertyId,this.nproperty).subscribe(_climate=>{
      ()=>{
      alert("Updated")
      this.router.navigate(['/property'])
      }
      
    })
  }

}
