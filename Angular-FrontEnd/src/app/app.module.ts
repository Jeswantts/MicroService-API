import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AgentComponent } from './agent/agent.component';
import { PropertyComponent } from './property/property.component';
import { AgentUpdateComponent } from './agent-update/agent-update.component';
import { PropertyUpdateComponent } from './property-update/property-update.component';
import { PropertyAddComponent } from './property-add/property-add.component';
import { AgentAddComponent } from './agent-add/agent-add.component';
import { AgentDeleteComponent } from './agent-delete/agent-delete.component';
import { AgentGetComponent } from './agent-get/agent-get.component';
import { PropertyDeleteComponent } from './property-delete/property-delete.component';
import { PropertyGetComponent } from './property-get/property-get.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AgentComponent,
    PropertyComponent,
    AgentUpdateComponent,
    PropertyUpdateComponent,
    PropertyAddComponent,
    AgentAddComponent,
    AgentDeleteComponent,
    AgentGetComponent,
    PropertyDeleteComponent,
    PropertyGetComponent,
    AdminComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
