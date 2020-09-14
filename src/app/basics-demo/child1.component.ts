import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    @Input() messageToChild :string;
    @Output() msgtoParent:EventEmitter<any>=  new EventEmitter();
    m1()
    {
      this.msgtoParent.emit("hai parent");
    }
}
