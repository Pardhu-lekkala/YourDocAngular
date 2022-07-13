import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-insurance-tables',
  templateUrl: './insurance-tables.component.html',
  styleUrls: ['./insurance-tables.component.css']
})
export class InsuranceTablesComponent implements OnInit {

  insuranceData:any=[]
  insuranceDetails:any=[]
  status: boolean = false;
  selectedCardId:number;
  masterData=JSON.parse(window.localStorage['masterData']);
  @Output() getInsuranceDetails:EventEmitter<any>=new EventEmitter()
  constructor(private service:MasterService) { 
  }

  clickEvent(id:any){
    this.selectedCardId=id
    this.status = !this.status
    console.log(id,"select id")
  }
  
  ngOnInit(): void {
    this.service.getInsuranceDatas().then(resp=>{
      this.insuranceData=resp
      console.log(this.insuranceData,"resp child")
    })

    this.service.getInsuranceDetails().then(resp=>{
      resp.forEach((item:any)=> {
        item.name=this.masterData.find((group:any)=>group.GroupId===21 && group.Id===item.InsuredRelationshipTypeId)?.Name
      });
      this.insuranceDetails=resp
      this.getInsuranceDetails.emit(resp)
      console.log(this.insuranceDetails,"ins details in child")
    })
  }
}
