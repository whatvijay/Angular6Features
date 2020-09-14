import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { SpaComponent } from './spa/spa.component';
import {RmModule} from './rm/rm.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PipeexampComponent} from './pipeexamp/pipeexamp.component';
import {CustomPipe} from './pipeexamp/CustomPipe.pipe';
import {CustomPipe2} from './pipeexamp/CustomPipe2.pipe';
import { Component2Component } from './component2/component2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialexamplesComponent } from './materialexamples/materialexamples.component';
import { MatButtonModule,MatMenuModule,MatSidenavModule,MatRadioModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {BasicsDemoComponent} from './basics-demo/basics-demo.component';
import { HoverdirectiveDirective } from './hoverdirective.directive';
import { Parent1Component } from './basics-demo/parent1.component';
import { Child1Component } from './basics-demo/child1.component';
import { FormsexampleComponent } from './formsexample/formsexample.component';
import { ServiceConsumeExampleComponent } from './service-consume-example/service-consume-example.component'
import {RestConsumerService} from './rest-consumer.service';
import { CssexamplesComponent } from './cssexamples/cssexamples.component';
import { CssexwithscssComponent } from './cssexwithscss/cssexwithscss.component';
import {AgGridModule} from 'ag-grid-angular';
import { AgridexampleComponent } from './agridexample/agridexample.component';
import {CanactgGuard} from './canactg.guard';
import {ResolveGexampleGuard} from './resolve-gexample.guard';
@NgModule({
  declarations: [
    CustomPipe,
    CustomPipe2,
    AppComponent,
    C1Component,
    CareersComponent,
    SpaComponent,
    PipeexampComponent,
    Component2Component,
    MaterialexamplesComponent,
    BasicsDemoComponent,
    HoverdirectiveDirective,
    Parent1Component,
    Child1Component,
    FormsexampleComponent,
    ServiceConsumeExampleComponent,
    CssexamplesComponent,
    CssexwithscssComponent,
    AgridexampleComponent,
    
    //Service1Comp//import { Service1Component } from './service1/service1.component';
//import { AppRoutingModule } from './/app-routing.module' ;onent
  ],
  imports: [
    BrowserModule,
    RmModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatRadioModule,
    AgGridModule.withComponents(null)
    //CommonModule
  ],
  providers: [RestConsumerService,CanactgGuard,ResolveGexampleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
