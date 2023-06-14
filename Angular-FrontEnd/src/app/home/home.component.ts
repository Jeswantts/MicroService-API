import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Property } from '../property';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img:string="assets/lead.webp";
  img1:string="assets/KMW-villa-neo-stolwarker-querkopf-architekten-frank-loeschke-I_0.jpg"
  img2:string="assets/why-villas-in-hyderabad-are-an-attractive-investment-destination-the-luxury.jpg"

  constructor(private serv:ApiService){}
  bhk!:string
  reside!:string
  location!:string
  price!:number
  properties: Property[]=[]
  Pro:any[]=[]
  Pro1:any[]=[]
  type!:string
  public obj1?:Object
  public obj2?:Object
  public obj3?:Object
  public obj4?:Object
  public obj5?:Object
  public obj6?:Object
  public obje1?:Object
  public obje2?:Object
  public obje3?:Object
  public obje4?:Object
  public obje5?:Object
  public obje6?:Object
  public obje7?:Object

  setBHK(value: string) {
    this.getCount(value);
  }
  getCount(bhk:string) {
    this.serv.count(bhk).subscribe(data => {
      if (bhk === '1rk') {
        this.obj1 = data;
      } else if (bhk === '1bhk') {
        this.obj2 = data;
      }else if (bhk === '2bhk') {
        this.obj3 = data;
      }else if (bhk === '3bhk') {
        this.obj4 = data;
      }else if (bhk === '4bhk') {
        this.obj5 = data;
      }
    });
  }

    setReside(value: string) {
      this.getCountReside(value);
    }
    getCountReside(reside:string) {
      this.serv.resideType(reside).subscribe(data => {
        if (reside === 'residential plot') {
          this.obje1 = data;
        } else if (reside === 'flats') {
          this.obje2 = data;
        }else if (reside === 'house&villas') {
          this.obje3 = data;
        }else if (reside === 'farm house') {
          this.obje4 = data;
        }else if (reside === 'penthouse') {
          this.obje5 = data;
        }else if (reside === 'studio apartment') {
          this.obje6 = data;
        }
      });
    }

    clearCount() {
      this.obje1 = undefined;
      this.obje2 = undefined;
      this.obje3 = undefined;
      this.obje4 = undefined;
      this.obje5 = undefined;
      this.obje6 = undefined;
    }

   Filter(){
          this.serv.filtertriple(this.type,this.location,this.price).subscribe((hey:Property[])=>{
            this.properties = hey;
          });
        }

    filterloc(){
      this.serv.filterloc("Chennai").subscribe((data:any)=>{
        this.Pro = data;
      });
    }


    fil(){
      this.serv.filterloc("Mumbai").subscribe((data:any)=>{
        this.Pro = data;
      });
    }




  }
