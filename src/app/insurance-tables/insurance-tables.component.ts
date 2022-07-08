import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-insurance-tables',
  templateUrl: './insurance-tables.component.html',
  styleUrls: ['./insurance-tables.component.css']
})
export class InsuranceTablesComponent implements OnInit {

  insuranceData:any
  constructor(private service:MasterService) { 
  // this.inputArray=this.service.getInsuranceData()
  //   console.log(this.service.getInsuranceData(),"data in ins table")
  }
  
  ngOnInit(): void {
    this.service.getInsuranceData()
    .subscribe(response => {
      this.insuranceData = response;
      console.log(this.insuranceData,"insurance data in child")
    });
  }
}
