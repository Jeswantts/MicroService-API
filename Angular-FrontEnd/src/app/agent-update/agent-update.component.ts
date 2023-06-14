import { Component } from '@angular/core';
import { Agent } from '../agent';
import { ApiService } from '../api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-agent-update',
  templateUrl: './agent-update.component.html',
  styleUrls: ['./agent-update.component.css']
})
export class AgentUpdateComponent {

  public agent?:Agent[]
  constructor(private serv:ApiService,private route: ActivatedRoute,private router: Router){}
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
  agentId!:0
 
  ngOnInit():void{
    {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const agentId = Number(params.get('id'));
        // Call the service method to fetch the reader by ID and update the form
        this.serv.getAgentById(agentId).subscribe(
          (reader: Agent) => {
            this.nagent = reader;
          },
          (error) => {
            console.error('Error retrieving reader:', error);
          }
        );
      });
    }
  }

  put(){
    this.serv.updateAgent(this.agentId,this.nagent).subscribe(_climate=>{
      alert("Updated")
      this.router.navigate(['/agent'])
    })
  }

}
