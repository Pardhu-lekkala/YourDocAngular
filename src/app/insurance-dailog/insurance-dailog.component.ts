import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-insurance-dailog',
  templateUrl: './insurance-dailog.component.html',
  styleUrls: ['./insurance-dailog.component.css']
})
export class InsuranceDailogComponent implements OnInit {
  tab:any
  editTableId:any
  emailTem:any
  masterData=JSON.parse(window.localStorage['masterData']);
  statusTypes:any=[]
  relationshipTypes:any=[]
  stateTypes:any=[]
  priorityTypes:any=[]
  statusData:any=[]
  adjusterData:any=[]
  supervisorData:any=[]
  hrData:any=[]
  insuranceEditData:any=[]
  isEditMode:Boolean
  insuranceId:any
  tabFields={
    effectiveFrom:"",
    effectiveTo:"",
    relationshiptoInsured:"",
    status:"",
    policy:"",
    claim:"",
    state:"",
    insuranceId:"",
    groupId:"",
    priority:"",
    copay:"",
    copayAmount:"",
    payer:"",
    policyAmount:"",
    approxSpentAmount:"",
    wcb:"",
    carrierCase:"",
    carrierId:"",
    city:"",
    adjuster:"",
    supervisor:"",
    HR:"",
    otherInfo:""
  }
  constructor(private service:MasterService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  onDataChange(value:any, key:string){
    switch(key){
      case "wcb":
        this.tabFields.wcb = value;
        break;
      case "relation":
        this.tabFields.relationshiptoInsured=value
        break;
      case 'state':
        this.tabFields.state=value
        break;
      case "status":
        this.tabFields.status=value
        break;
      case "carrierCase":
        this.tabFields.carrierCase=value
        break;
      case "carrierId":
        this.tabFields.carrierId=value
        break;
      case "city":
        this.tabFields.carrierId=value
        break;
      case "otherInfo":
        this.tabFields.carrierId=value
        break;
      case "priority":
        this.tabFields.priority=value
        break;
      case "effectiveFrom":
        this.tabFields.effectiveFrom=value
        break;
      case 'claim':
        this.tabFields.claim=value
        break;
      case "effectiveTo":
        this.tabFields.effectiveTo=value
        break;
      case "policy":
        this.tabFields.claim=value
        break;
      case 'policyAmount':
        this.tabFields.policyAmount=value
        break;
      case 'approxAmount':
        this.tabFields.approxSpentAmount=value
        break
      case 'insId':
        this.tabFields.insuranceId=value
        break
      case 'groupId':
        this.tabFields.groupId=value
        break
      case 'payer':
        this.tabFields.payer=value
        break
      case 'copayAmount':
        this.tabFields.copayAmount=value
        break

    }
    console.log(key,value,"data on change")
  }


  getTab(tabData:string){
    this.tab=tabData
    console.log(this.tab,"tab in get")
    this.getStatusData();
    //return this.tab
  }

  getStatusData(){
    this.statusTypes=this.masterData.filter((item:any)=>item.GroupId===50)
    console.log(this.statusTypes,"status data type")
  }

  getRelationshipData(){
    this.relationshipTypes=this.masterData.filter((item:any)=>item.GroupId===21)
    console.log(this.relationshipTypes,"relation data type")
  }

  getStateData(){
    this.stateTypes=this.masterData.filter((item:any)=>item.GroupId===6)
    console.log(this.stateTypes,"state data type")
  }

  getPriorityData(){
    this.priorityTypes=this.masterData.filter((item:any)=>item.GroupId===22)
    console.log(this.priorityTypes,"priority data  type")
  }

  getChangeTabData(val:any){
    this.tabFields.status=val
    console.log(this.tabFields,"tab modified")
  }

  ngOnInit(): void {
    console.log(this.tab,"tab data")
    this.getStatusData()
    this.getRelationshipData()
    this.getStateData()
    this.getPriorityData()
    this.editTableId=this.data.tableId
    if(this.data.editTabData==="Worker's Compensation"){
      this.tab="Worker’s Compensation"
    }else{
      this.tab=this.data.editTabData
    }
    this.isEditMode=this.data.isEditMode
    console.log(this.data.editTabData,this.isEditMode,this.editTableId,"edit data in dailog")

    if(this.isEditMode===true){
      this.service.getInsuranceDetails().then(resp=>{
        this.insuranceEditData=resp.find((item:any)=>item.Id===this.editTableId) 
          this.tabFields.effectiveTo=this.insuranceEditData.ExpirationDate
          this.tabFields.effectiveFrom=this.insuranceEditData.EffectiveFrom
          this.tabFields.insuranceId=this.insuranceEditData.InsuranceId,
          this.tabFields.groupId=this.insuranceEditData.GroupId,
          this.tabFields.copay=this.insuranceEditData.CopayType,
          this.tabFields.copayAmount=this.insuranceEditData.Amount,
          this.tabFields.claim=this.insuranceEditData.ClaimNumber
          this.tabFields.payer="",
          this.tabFields.policyAmount=this.insuranceEditData.PolicyAmount,
          this.tabFields.approxSpentAmount=this.insuranceEditData.ApproxSpentAmount,
          this.tabFields.wcb=this.insuranceEditData.Wcb
          this.tabFields.carrierCase=this.insuranceEditData.CarrierCaseNumber
          this.tabFields.carrierId=this.insuranceEditData.Carrierid
          this.tabFields.city=this.insuranceEditData.City
          this.tabFields.policy=this.insuranceEditData.PolicyNumber
          this.tabFields.otherInfo=this.insuranceEditData.OtherInformation
          this.tabFields.relationshiptoInsured=this.masterData.find((group:any)=>group.GroupId===21 && group.Id===this.insuranceEditData.InsuredRelationshipTypeId)?.Name,
          this.tabFields.state=this.masterData.find((group:any)=>group.GroupId===41 && group.Id===this.insuranceEditData.InsuredRelationshipTypeId)?.Name,
          this.tabFields.status=this.masterData.find((group:any)=>group.GroupId===50 && group.Id===this.insuranceEditData.StatusId)?.Name,
          this.tabFields.priority=this.masterData.find((group:any)=>group.GroupId===22 && group.Id===this.insuranceEditData.PriorityId)?.Name,
          console.log(this.insuranceEditData,"ins details in dailog")
          console.log(this.tabFields,"tab fields edit data")
          })
        }

        this.service.getAdjusterData().then(resp=>{
          this.adjusterData=resp.OrganizationMembers
          console.log(this.adjusterData,"adjuster data")
        })

        this.service.getSupervisorData().then(resp=>{
          this.supervisorData=resp.OrganizationMembers
          console.log(this.supervisorData,"supervisor data")
        })

        this.service.getHRData().then(resp=>{
          this.hrData=resp.OrganizationMembers
          console.log(this.hrData,"hr data")
        })
  }
}
