import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestConsumerService  {

  constructor(private http:HttpClient) { 
    console.log("in restCServ");
    console.log(this.http);
  }

 
  
  msg: any;
  
  getHi() :String
  {
    console.log("in restCServ getHI");
    this.http.get("http://localhost:8181/sayHi",{headers:{'Access-Control-Allow-Origin': '*'}}).subscribe((data)=>{
      console.log("inside subscibe");
      console.log(data);
      this.msg=(data as any).greet+(data as any).i +(data as any).c;
      //console.log(data);
      console.log("rest cons"+this.msg);
    });
    console.log(this.msg);
    return this.msg;
  } 

  getHiOb() :Observable<SampleResponse>
  {
    console.log("in restCServ getHIOb");
   return this.http.get<SampleResponse>("http://localhost:8181/sayHi",{headers:{'Access-Control-Allow-Origin': '*'}});
  }
}

export interface SampleResponse
  {
    greet:String;
    i:Number;
    c:String;
    l:Number;
  }