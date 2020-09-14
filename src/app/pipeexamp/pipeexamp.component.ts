import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexamp',
  templateUrl: './pipeexamp.component.html',
  styleUrls: ['./pipeexamp.component.css']
})
export class PipeexampComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sampleMessage : String ="aBcD";
  sampleDate : Date = new Date();
  sampleMonth : any = this.sampleDate.getMonth();
  sampleTime : any = this.sampleDate.getTime();
  janDate :Date = new Date(2020,1,1)
  janMonth : any = this.janDate.getMonth();
  decimalValue : number = 10.2;
  jsonVal :any ={i:1,j:2,k:3,name:'vijay',addr:{hno:123,strt:'st1',pin:500091}};
  perCentVal :number =0.2578888;
  perCentVal2 :number =25;
  subjects:any =['history','civics','maths','geography','economics'];
}

