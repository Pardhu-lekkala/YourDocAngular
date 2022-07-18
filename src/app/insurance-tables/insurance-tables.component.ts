import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MasterService } from '../master.service';
import {MatDialog} from '@angular/material/dialog';
import { InsuranceDailogComponent } from '../insurance-dailog/insurance-dailog.component';



@Component({
  selector: 'app-insurance-tables',
  templateUrl: './insurance-tables.component.html',
  styleUrls: ['./insurance-tables.component.css']
})
export class InsuranceTablesComponent implements OnInit {

  insuranceData:any=[]
  insuranceDetails:any=[]
  editTab:any
  insuranceTypeId:any
  status: boolean = false;
  selectedCardId:number;
  masterData=JSON.parse(window.localStorage['masterData']);
  @Output() getInsuranceDetails:EventEmitter<any>=new EventEmitter()
  constructor(public dialog: MatDialog,private service:MasterService) { 
  }

  clickEvent(id:any){
    this.selectedCardId=id
    this.status = !this.status
    console.log(id,"select id")
  }


  openDialog(id:any,tableId:any) {
    this.insuranceTypeId=id
    this.editTab=this.masterData.find((group:any)=>group.GroupId===10 && group.Id===id)?.Name
    const dialogRef = this.dialog.open(InsuranceDailogComponent,{height:'100vh',width:'50vw',position: { right: '0'},data: {editTabData: this.editTab,isEditMode:true,tableId:tableId}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log(this.editTab,"edit tab")
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
