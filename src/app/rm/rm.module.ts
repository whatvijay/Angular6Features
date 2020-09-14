import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes,Router} from '@angular/router';
import {AboutComponent} from 'src/app/about/about.component';
import {CareersComponent} from 'src/app/careers/careers.component';
import {PipeexampComponent} from 'src/app/pipeexamp/pipeexamp.component';
import {MaterialexamplesComponent} from 'src/app/materialexamples/materialexamples.component';
import {BasicsDemoComponent} from 'src/app/basics-demo/basics-demo.component';
import {FormsexampleComponent} from 'src/app/formsexample/formsexample.component';
import {ServiceConsumeExampleComponent} from 'src/app/service-consume-example/service-consume-example.component';
import {CssexamplesComponent} from 'src/app/cssexamples/cssexamples.component';
import {CssexwithscssComponent} from 'src/app/cssexwithscss/cssexwithscss.component';
import {AgridexampleComponent} from 'src/app/agridexample/agridexample.component';
import { CanactgGuard } from '../canactg.guard';
import {ResolveGexampleGuard} from '../resolve-gexample.guard';
//import { CssexamplesComponent } from '../cssexamples/cssexamples.component';
const routy :Routes =[
  {path:'about',component:AboutComponent},
  {path:'career',component:CareersComponent},
  {path:'pipeexample',component:PipeexampComponent},
  {path:'matExample',component:MaterialexamplesComponent},
  {path:'basicdemo',component:BasicsDemoComponent},
  {path:'formsdemo',component:FormsexampleComponent},
  {path:'serviceExample',component:ServiceConsumeExampleComponent},
  {path:'cssexample',component:CssexamplesComponent},
  {path:'cssexwithscss',component:CssexwithscssComponent},
  {path:'agridexample',canActivate:[CanactgGuard],component:AgridexampleComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routy)
  ],
  declarations: [AboutComponent],
  exports :[RouterModule]
})
export class RmModule { }
