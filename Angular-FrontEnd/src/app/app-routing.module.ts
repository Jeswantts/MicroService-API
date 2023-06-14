import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgentComponent } from './agent/agent.component';
import { AgentGetComponent } from './agent-get/agent-get.component';
import { AgentAddComponent } from './agent-add/agent-add.component';
import { AgentUpdateComponent } from './agent-update/agent-update.component';
import { AgentDeleteComponent } from './agent-delete/agent-delete.component';
import { PropertyComponent } from './property/property.component';
import { PropertyGetComponent } from './property-get/property-get.component';
import { PropertyAddComponent } from './property-add/property-add.component';
import { PropertyUpdateComponent } from './property-update/property-update.component';
import { PropertyDeleteComponent } from './property-delete/property-delete.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'agent',component:AgentComponent},
  {path:'agent/:id',component:AgentGetComponent},
  {path:'agent/add/A',component:AgentAddComponent},
  {path:'agent/update/:id',component:AgentUpdateComponent},
  {path:'agent/delete/:id',component:AgentDeleteComponent},
  {path:'property',component:PropertyComponent},
  {path:'property/:id',component:PropertyGetComponent},
  {path:'property/add/A',component:PropertyAddComponent},
  {path:'property/update/:id',component:PropertyUpdateComponent},
  {path:'property/delete/:id',component:PropertyDeleteComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'**',redirectTo:'/home'}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
