import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY APPLICATION';
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

}
