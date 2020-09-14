import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-formsexample',
  templateUrl: './formsexample.component.html',
  styleUrls: ['./formsexample.component.css']
})
export class FormsexampleComponent implements OnInit {

  constructor() { }
  formData;
  formData2;
  ngOnInit() {
    this.formData=new  FormGroup({
      email: new FormControl('default',Validators.compose([Validators.required])),
      pwd:new FormControl('default')
    });
    this.formData2= new FormGroup({emailNew:new FormControl('abcd'),pwd: new FormControl('a')});
  }
  formHandle3(data)
  {
    alert(data.pwd+data.emailNew);
  }
  formHandle2(data)
  {
      alert(data.email);
  }
  formhandle1(data)
  {
      alert(data.name);
      alert(data.password);
  }
}
