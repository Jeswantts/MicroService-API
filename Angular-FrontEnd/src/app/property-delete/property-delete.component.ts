import { Component } from '@angular/core';
import { Property } from '../property';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-property-delete',
  templateUrl: './property-delete.component.html',
  styleUrls: ['./property-delete.component.css']
})
export class PropertyDeleteComponent {
  constructor(private ser:ApiService){}
  public id!:number
  public property?:Property

  delete(){
    this.ser.deleteProperty(this.id).subscribe(
      ()=>{
        alert("DEleted")
      }
    )
  }

}
