import { Component, OnInit, Input } from '@angular/core';
import {Child1Component} from './child1.component'
@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
  messageFromParent ="hai child";
  msg:String;
  readMsg(msgEvent)
  {
    console.log("event message in parent"); 
    this.msg=msgEvent;
  }
}
