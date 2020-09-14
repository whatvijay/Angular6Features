import { Component, OnInit ,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-basics-demo',
  templateUrl: './basics-demo.component.html',
  styleUrls: ['./basics-demo.component.css']
})
export class BasicsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ng on init block");
  }

  ngOnChanges(changeRecord:SimpleChanges)
  {
    console.log("ngonchanges method called"+changeRecord);
  }

  ngOnDestroy()
  {
    console.log("ng on destroy method called");
  }

  ngDoCheck()
  {
    console.log("ng do check method is called");
  }
  ngAfterContentInit()
  {
    console.log("ng after content init ");
  }
  ngAfterContentChecked()
  {
    console.log("after content checked");
  }
  ngAfterViewInit()
  {

    console.log("after view init");
  }
  ngAfterViewChecked()
  {
    console.log("after view checked");
  }
  interPolationExample:String = 'this message is interpolated';
  subjects =['angular','java','designpatterns','dsa'];
  cities=['hyderabad','secunderabad','zindabad'];
  isAvailable:Boolean=true;
  isAvailable2:Boolean=false;
  textHtml= "Binding done using property the property is in [] and variable of text is given after =";
  textHtml2="setting innerHTML property using bind tag";
  colorFromComp="BLUE";
  bgco="RED";
  colspanattr=4;
  borderW=4;
  borderColor="GREEN";
  onClickInput:String;
  tempValid=true;
  clickedme(event)
  {
     // alert(event.target.value);
     this. onClickInput= event.target.value +"value modifed ";
  }
}
