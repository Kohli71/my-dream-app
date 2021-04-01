import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '...MY APPLICATION...';
  todaydate = new Date();
  jsonval = {name:'Kohli', age:'32', address: {a1:'Delhi', a2:'Bangalore'}};
  months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  isavailable = true;

  onClick(event: any)
  {
    alert("Button is clicked...");
    console.log(event);
  }

  changeMonth(event: any)
  {
    alert("Month has been changed...");
    console.log(event);
  }

  constructor(private myservice: MyserviceService){}
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
  }
}
