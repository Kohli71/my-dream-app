import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceProperty = "Service Created";
  
  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }

  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient){}
  getData(){
    return this.http.get(this.apiurl);
  }
  
}
