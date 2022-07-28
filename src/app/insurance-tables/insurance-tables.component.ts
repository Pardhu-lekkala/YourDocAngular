import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
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
  clickType='edit'
  selectedCardId:number[] = [];
  masterData=JSON.parse(window.localStorage['masterData']);
  @Output() getInsuranceDetails:EventEmitter<any>=new EventEmitter()
  constructor(public dialog: MatDialog,private service:MasterService) { 
  }

  @Input() addedDetails: [];

  clickEvent(id:number){
    if(this.selectedCardId.includes(id)){
      console.log("Executed.")
      this.selectedCardId = this.selectedCardId.filter((element: number) => {
        return element !== id;
      })
    }else{
      this.selectedCardId.push(id)
    }
    this.status = !this.status
    console.log(this.selectedCardId, this.status, id, id in this.selectedCardId,"select id")
  }

  openDialog(id:any,tableId:any) {
    this.insuranceTypeId=id
    this.clickType='edit'
    this.editTab=this.masterData.find((group:any)=>group.GroupId===10 && group.Id===id)?.Name
    const dialogRef = this.dialog.open(InsuranceDailogComponent,{height:'100vh',width:'50vw',position: { right: '0'},data: {editTabData: this.editTab,isEditMode:true,tableId:tableId}});
    dialogRef.afterClosed().subscribe((result) => {
      this.service.getInsuranceDetails().then(resp=>{
        resp.forEach((item:any)=> {
          item.name=this.masterData.find((group:any)=>group.GroupId===21 && group.Id===item.InsuredRelationshipTypeId)?.Name
        });
        this.insuranceDetails=resp
        console.log(this.insuranceDetails,"ins details in child")
      })
      console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',result);
    });
    console.log(this.editTab,"edit tab")
  }

  deleteInsrunce(id:any){
    console.log(id,"id of delete")
    this.clickType='delete'
    this.service.deleteInsuranceData(id).then((res)=>{
      this.insuranceDetails.find(
        (group: any) =>{
          console.log(group.PartnerMemberId )
          if(group.Id ===  id){
            this.insuranceDetails.splice(this.insuranceDetails.indexOf(group),1)
            //console.log(this.insuranceDetails.indexOf(group),'ssssssssssssssssssss')
          }
        })
    })
  }

  associateInsurance(id:any){
    this.clickType='associate'
    let isAssociated=true
    this.service.associateAndDissociate(9425,id,isAssociated).then((res)=>{
      this.insuranceDetails.find(
        (group: any) =>{
          console.log(group.PartnerMemberId )
          if(group.Id ===  id){
            group.IsAssociatedToEpisode=isAssociated
          }
        })
    })
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
