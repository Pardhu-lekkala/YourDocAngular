import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-insurance-dailog',
  templateUrl: './insurance-dailog.component.html',
  styleUrls: ['./insurance-dailog.component.css']
})
export class InsuranceDailogComponent implements OnInit {

  tab:string
  constructor() { }

  getTab(tabData:string){
    this.tab=tabData
    return this.tab
  }

  ngOnInit(): void {
    console.log(this.tab,"tab data")
    //this.tab="Worker’s Compensation"
  }
}
