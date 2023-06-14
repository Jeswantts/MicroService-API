import { Component } from '@angular/core';
import { Agent } from '../agent';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.css']
})
export class AgentAddComponent {
  public agent?:Agent[]
  constructor(private serv:ApiService,private router:Router){}
  nagent:Agent={
    agentId: 0,
    agentName: '',
    description: '',
    locality: '',
    address: '',
    phone: '',
    email: '',
    agentRating: 0,
    properties: []
  }
  
  post(){
    this.serv.addAgent(this.nagent).subscribe(_climate=>{
      alert("Inserted")
      this.router.navigate(['/agent'])
    })
  }
}
