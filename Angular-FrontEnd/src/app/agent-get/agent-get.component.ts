import { Component } from '@angular/core';
import { Agent } from '../agent';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-agent-get',
  templateUrl: './agent-get.component.html',
  styleUrls: ['./agent-get.component.css']
})
export class AgentGetComponent {
  public id!:number
  public agent?:Agent
  constructor(private _serve:ApiService){}

  getId(){
    return this._serve.getAgentById(this.id).subscribe(data=>this.agent=data)
  }

}
