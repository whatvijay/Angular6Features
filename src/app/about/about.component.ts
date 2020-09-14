import { Component, OnInit, Inject } from '@angular/core';
import {RestConsumerService} from 'src/app/rest-consumer.service';
import { NgForm } from '@angular/forms';
//import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[RestConsumerService]
})
export class AboutComponent implements OnInit {

   private restConsumerService: RestConsumerService;
   //@Inject(RestConsumerService)
  constructor(  restConsumerService: RestConsumerService) { 

    this.restConsumerService = restConsumerService;
  }

  ngOnInit() {
   ///this.sayHi();
  }
    msg : String ="about page";
    msg2 : String ="second page";
    arrayOFValues =["value1","value2","value3"];
    showOrHide : boolean = true;
    inputedValue :String;
    sayHi()
    {
      this.msg =this.restConsumerService.getHi();
      console.log("about"+this.msg);
    }//<a routeLink="career" routerLinkActive="active c1">career from about</a>
    // 2 way databinding.
    clickMe(event)
    {
      this.inputedValue =event.target.value+"grabbed in clickme function and show on screen";
    }
    input2 :String ;

    /** submitFirstForm(firstForm:NgForm)
    {
        console.log(firstForm);
    }**/
    
}
