import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-delete',
  templateUrl: './agent-delete.component.html',
  styleUrls: ['./agent-delete.component.css']
})
export class AgentDeleteComponent {
  constructor(private ser:ApiService){}
  id!:0
  public agent?:Agent


  // ngOnInit():void{
  //   {
  //     this.route.paramMap.subscribe((params: ParamMap) => {
  //       const id = Number(params.get('id'));
  //       this.ser.getAgentById(id);// Call the service method to fetch the reader by ID and update the form
  //       this.ser.deleteAgent(id).subscribe(
  //         () => {
  //           console.log('Agent deleted successfully.');
  //         },
  //         (error) => {
  //           console.error('Error retrieving reader:', error);
  //         }
  //       );
  //     });
  //   }
  // }

  // deleteAgent(id: number): void {
  //   this.serv.deleteAgent(id).subscribe(
  //     () => {
  //       console.log('Property deleted successfully');
  //       // Refresh the property list after successful deletion
  //       this.getAll();
  //     },
  //     (error) => {
  //       console.error('Error deleting property:', error);
  //       // Handle the error as needed
  //     }
  //   );
  // }

  // delete(){
  //   this.ser.deleteAgent(this.id).subscribe(
  //     ()=>{
  //       alert("Deleted")
  //     }
  //   )
  // }

}
