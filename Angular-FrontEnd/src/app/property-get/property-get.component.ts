import { Component } from '@angular/core';
import { Property } from '../property';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-property-get',
  templateUrl: './property-get.component.html',
  styleUrls: ['./property-get.component.css']
})
export class PropertyGetComponent {
  public id!:number
  public property?:Property
  constructor(private _serve:ApiService){}

  getId(){
    return this._serve.getPropertyById(this.id).subscribe(data=>this.property=data)
  }

}
