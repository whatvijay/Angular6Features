import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agridexample',
  templateUrl: './agridexample.component.html',
  styleUrls: ['./agridexample.component.scss']
})
export class AgridexampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  colsDef= [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price', editable: true}
  ];
  rowdata=[{make:'yamaha',model:'a1',price:'100'},{make:'yamaha',model:'a2',price:'200'},{make:'honda',model:'a3',price:'300'}];
}