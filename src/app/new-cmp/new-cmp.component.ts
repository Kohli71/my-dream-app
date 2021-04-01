import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  comp = "one more new Component";
  todayDate = new Date();
  newComponentProperty: any;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todayDate = this.myservice.showTodayDate();
    this.newComponentProperty = this.myservice.serviceProperty;
  }

}
