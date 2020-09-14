import { Component, OnInit } from '@angular/core';
import {RestConsumerService} from 'src/app/rest-consumer.service';
import { consumeBinding } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-service-consume-example',
  templateUrl: './service-consume-example.component.html',
  styleUrls: ['./service-consume-example.component.css'],
  providers:[RestConsumerService]
})
export class ServiceConsumeExampleComponent implements OnInit {
  restConsumerService:RestConsumerService;
  constructor( restConsumerServiceInjected:RestConsumerService) {
    this.restConsumerService= restConsumerServiceInjected;
   }
  
  jsonMsg ;
 ngOnInit() {
   //this.jsonMsg=this.restConsumerService.
      this.consume();
  }

 consume()
  {
    console.log("inside serviceConsume1");
   this.restConsumerService.getHiOb().subscribe((data) =>{
     //this.jsonMsg=(data as any).greet +(data as any).i +(data as any).c;
     this.jsonMsg=data;
   });
   console.log("inside serviceConsume2");
   console.log(this.jsonMsg);
  }
}
