import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InsuranceDailogComponent } from '../insurance-dailog/insurance-dailog.component';
import { MasterService } from '../master.service';
 


@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  msg:string
  tab:string
  sideTab:string
  insuranceDetails:any=[]
  addedInsDetails:any=[]
  masterData=JSON.parse(window.localStorage['masterData']);
  constructor(public dialog: MatDialog,private service:MasterService) {}

  openDialog() {
    const dialogRef = this.dialog.open(InsuranceDailogComponent,{height:'100vh',width:'50vw',position: { right: '0'},data: {editTabData: "Worker's Compensation",isEditMode:false}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.service.getInsuranceDetails().then(resp=>{
        resp.forEach((item:any)=> {
          item.name=this.masterData.find((group:any)=>group.GroupId===21 && group.Id===item.InsuredRelationshipTypeId)?.Name
        });
        this.addedInsDetails=resp
        console.log(this.addedInsDetails,"ins details in child")
      })
    });
  }

  workUnderProgress(tabs:any){
    this.msg='work is under maintenance';
    this.tab=tabs
    console.log(this.tab,"tab")
    return this.msg,this.tab;
  }

  getDemographics(tabs:any){
    this.msg='Demographics is clicked';
    this.tab=tabs
    return this.msg;
  }

  getSideTab(tabData:string){
    this.sideTab=tabData
    this.msg="work under maintenance"
    console.log(this.sideTab,"side tab")
    return this.msg,this.sideTab
  }

  getInsuranceDetails(data:any){
    this.insuranceDetails=data
    console.log(this.insuranceDetails,"data from child")
  }

  ngOnInit(): void {
    
  }

}
