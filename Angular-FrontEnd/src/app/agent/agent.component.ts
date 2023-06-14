import { Component } from '@angular/core';
import { Agent } from '../agent';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {

  public agent:Agent[]=[]
  id!:0
  constructor(private serv:ApiService,private router: Router){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    return this.serv.getAgent().subscribe(data=>this.agent=data)
  }

  delete(agentId:number){
    this.serv.deleteAgent(agentId).subscribe(
      ():void=>{
        // this.agent=this.agent.filter(a=>a.agentId==agentId);
        alert("Deleted");
        console.log(agentId);
      },
      (error)=>{
        console.log('error',error)
      }
    )
  }
  
  put(id:number){
    this.router.navigate(['/agent/update',id])
  }
  

}
