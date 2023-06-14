import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from './agent';
import { Property } from './property';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _urlagent:string = 'https://localhost:7066/api/Agent'

  constructor(private http:HttpClient) { }


  addUser(user:User):Observable<User>{
    return this.http.post<User>('https://localhost:7271/api/Users',user)
  }
  getUser():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:7271/api/Users')
  }
  updateUser(id:number,user:User):Observable<User>{
    return this.http.put<User>(`https://localhost:7271/api/Users/${id}`,user)
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(`https://localhost:7271/api/Users/${id}`)
  }
  

  getAgent():Observable<Agent[]>{
    return this.http.get<Agent[]>(this._urlagent)
  }
  getAgentById(id:number):Observable<Agent>{
    return this.http.get<Agent>(`https://localhost:7066/api/Agent/${id}`)
  }
  updateAgent(agentId:number,agent:Agent):Observable<Agent>{
    return this.http.put<Agent>(`https://localhost:7066/api/Agent?/${agentId}`,agent)
  }
  addAgent(agent:Agent):Observable<Agent>{
    return this.http.post<Agent>('https://localhost:7066/api/Agent',agent)
  }
  deleteAgent(agentId:number):Observable<Agent>{
    return this.http.delete<Agent>(`https://localhost:7066/api/Agent/${agentId}`)
  }
  



  getProperty():Observable<Property[]>{
    return this.http.get<Property[]>('https://localhost:7172/api/Property')
  }
  getPropertyById(id:number):Observable<Property>{
    return this.http.get<Property>(`https://localhost:7172/api/Property/${id}`)
  }
  updateProperty(propertyId:number,property:Property):Observable<Property>{
    return this.http.put<Property>(`https://localhost:7172/api/Property?/${propertyId}`,property)
  }
  addProperty(property:Property):Observable<Property>{
    return this.http.post<Property>('https://localhost:7172/api/Property',property)
  }
  deleteProperty(id:number):Observable<Property>{
    return this.http.delete<Property>(`https://localhost:7172/api/Property/${id}`)
  }
  count(bhk:string):Observable<Object>{
    return this.http.get<object>(`https://localhost:7172/api/Property/Count/BHK/${bhk}`)
  }
  resideType(reside:string):Observable<Object>{
    return this.http.get<object>(`https://localhost:7172/api/Property/Count/Reside/${reside}`)
  }
  filterloc(location:string):Observable<Property[]>{
    return this.http.get<Property[]>(`https://localhost:7172/api/Property/Filter/Location/${location}`)
  }
  filtertriple(type:string,location:string,price:number):Observable<Property[]>{
    return this.http.get<Property[]>(`https://localhost:7172/api/Property/Filter/${type},${location},${price}`)
  }
}
