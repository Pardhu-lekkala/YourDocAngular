import { Component, OnInit, Inject,Output,EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from '../master.service';
import { FormControl } from '@angular/forms';
//NjPipComponent

@Component({
  selector: 'app-nj-pip',
  templateUrl: './nj-pip.component.html',
  styleUrls: ['./nj-pip.component.css']
})

export class NjPipComponent implements OnInit {
  control = new FormControl('');
  tab: any;
  editTableId: any;
  emailTem: any;
  dropClick: boolean;
  searchType: string;
  masterData = JSON.parse(window.localStorage['masterData']);
  statusTypes: any = [];
  relationshipTypes: any = [];
  stateTypes: any = [];
  priorityTypes: any = [];
  statusData: any = [];
  payerData: any = [];
  adjusterData: any = [];
  insuranceEditData: any = [];
  editAdjuster: any = [];
  isEditMode: Boolean;
  validate=false
  postResponse=false
  clickType:string
  insuranceId: any;
  today=new Date()
  tabFields = {
    initialTabId:10,
    selectedPayerId:'',
    selectedAdjusterId:'',
    selectedStatusId:29,
    selectedPriorityId:1,
    selectedTableId:'',
    stateId:'',
    relationId:'',
    effectiveFrom: '',
    effectiveTo: '',
    relationshiptoInsured: '',
    status: '',
    policy: '',
    claim: '',
    priority: '',
    payer: '',
    policyAmount: '',
    approxSpentAmount: '',
    adjuster: '',
    payerData:'',
    payerId:'',
    adjusterId:'',
    firstName:'',
    lastName:'',
    gender:'',
    phoneNumber:'',
    dob:'',
    ssn:'',
    address1:'',
    address2:'',
    zip:'',
    city: '',
    state: '',
  };

  @Output() validateDataEvent=new EventEmitter()
  constructor(
    private service: MasterService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDataChange(value: any, key: string) {
    switch (key) {
      case 'relation':
        this.tabFields.relationshiptoInsured = value;
        this.tabFields.relationId = this.masterData.find(
          (group: any) =>
            group.GroupId === 21 &&
            group.Name === value
        )?.Id
        break;
      case 'status':
        this.tabFields.status = value;
        if(value==='Active'){
          this.tabFields.selectedStatusId=29
        }else{
          this.tabFields.selectedStatusId=31
        }
        break;
      case 'priority':
        this.tabFields.priority = value;
        if(value==="Primary"){
          this.tabFields.selectedPriorityId=1
        }else if(value==="Secondary"){
          this.tabFields.selectedPriorityId=2
        }else if(value==="Tertiary"){
          this.tabFields.selectedPriorityId=3
        }
        break;
      case 'effectiveFrom':
        this.tabFields.effectiveFrom = value;
        break;
      case 'claim':
        this.tabFields.claim = value;
        break;
      case 'effectiveTo':
        this.tabFields.effectiveTo = value;
        break;
      case 'policy':
        this.tabFields.claim = value;
        break;
      case 'policyAmount':
        this.tabFields.policyAmount = value;
        break;
      case 'approxAmount':
        this.tabFields.approxSpentAmount = value;
        break;
      case 'firstName':
        this.tabFields.firstName = value;
        break;
      case 'lastName':
        this.tabFields.lastName = value;
        break;
      case 'gender':
        if(value==="Male"){
          this.tabFields.gender = 'M';
        }else if(value){
          this.tabFields.gender='F'
        }else{
          this.tabFields.gender='Unknown'
        }
        break;
      case 'phoneNumber':
        this.tabFields.phoneNumber = value;
        break;
      case 'city':
        this.tabFields.city = value;
        break;
      case 'state':
        this.tabFields.state = value;
        this.tabFields.stateId = this.masterData.find(
          (group: any) =>
            group.GroupId === 6 &&
            group.Name === value
        )?.Id
        break;
      case 'dob':
        this.tabFields.dob = value;
        break;
      case 'ssn':
        this.tabFields.ssn = value;
        break;
      case 'address1':
        this.tabFields.address1 = value;
        break;
      case 'address2':
        this.tabFields.address2 = value;
        break;
        case 'payer':
          this.tabFields.payerData = value;
          this.searchType = 'payer';
          if (this.tabFields.payerData.length % 2 === 0) {
            this.service.getPayerData(value).then((resp) => {
              this.payerData = resp.Payors;
              console.log(this.payerData, 'payer data');
              console.log(this.tabFields.payerData.length, 'payer length');
              console.log(this.tabFields.payerData, 'payer status');
            });
          }
          break;
      case 'adjuster':
        this.tabFields.adjuster = value;
        this.searchType = 'adjuster';
        if (this.tabFields.adjuster.length % 2 === 0) {
          this.service.getAdjusterData(value).then((resp) => {
            this.adjusterData = resp.OrganizationMembers;
            console.log(this.adjusterData, 'adjuster data');
          });
        }
        break;
    }
    this.dropClick = false;
    console.log(key, value, 'data on change');
  }

  setPayerValue(payerId:any,val1: any,val2:any,val3:any,val4:any,val5:any, click: any, type: any) {
    this.tabFields.payerData = val1+","+val2+","+val3+","+val4+","+val5;
    this.tabFields.selectedPayerId=payerId
    this.dropClick = click;
    console.log(this.tabFields.payerData, 'drop payer val');
  }

  setAdjusterValue(adjusterId:any,val1: any,val2:any,val3:any,val4:any,val5:any,val6:any,val7:any,val8:any, click: any, type: any) {
    this.tabFields.adjuster = val1+","+val2+","+val3+","+val4+","+val5+","+val6+","+val7+","+val8
    this.tabFields.selectedAdjusterId=adjusterId
    this.dropClick = click;
  }

  /*******************************VALIDATIONS*******************************************/
  fieldValidations(type:string){
    if((this.tabFields.relationshiptoInsured ==="" || this.tabFields.payerData==="")&& type==="njPip"){
      this.validate=true
    }else{
      this.validate=false
      this.service.postInsuranceData(this.tabFields)
      .then((response)=>{
        this.postResponse=true
      }).catch((error)=>{
        this.postResponse=false
      })
    }
    this.validateDataEvent.emit(this.validate)
  }


  getTab(tabData: string) {
    this.tab = tabData;
    console.log(this.tab, 'tab in get');
    this.getStatusData();
    //return this.tab
  }

  getStatusData() {
    this.statusTypes = this.masterData.filter(
      (item: any) => item.GroupId === 50
    );
    console.log(this.statusTypes, 'status data type');
  }

  getRelationshipData() {
    this.relationshipTypes = this.masterData.filter(
      (item: any) => item.GroupId === 21
    );
    console.log(this.relationshipTypes, 'relation data type');
  }

  getStateData() {
    this.stateTypes = this.masterData.filter((item: any) => item.GroupId === 6);
    console.log(this.stateTypes, 'state data type');
  }

  getPriorityData() {
    this.priorityTypes = this.masterData.filter(
      (item: any) => item.GroupId === 22
    );
    console.log(this.priorityTypes, 'priority data  type');
  }

  getChangeTabData(val: any) {
    this.tabFields.status = val;
    console.log(this.tabFields, 'tab modified');
  }

  ngOnInit(): void {
    console.log(this.tab, 'tab data');
    this.getStatusData();
    this.getRelationshipData();
    this.getStateData();
    this.getPriorityData();
    this.editTableId = this.data.tableId;
    this.tabFields.selectedTableId=this.editTableId
    if (this.data.editTabData === "Worker's Compensation") {
      this.tab = 'Worker’s Compensation';
    } else {
      this.tab = this.data.editTabData;
    }
    this.isEditMode = this.data.isEditMode;
    console.log(
      this.data.editTabData,
      this.isEditMode,
      this.editTableId,
      'edit data in dailog'
    );

    if (this.isEditMode === true && this.data.editTabData==="NJ - PIP") {
      this.service.getInsuranceDetails().then((resp) => {
        this.insuranceEditData = resp.find(
          (item: any) => item.Id === this.editTableId
        );
        this.tabFields.payerId = this.insuranceEditData.PayorId
        if(this.tabFields.payerId !== ''){
          console.log('called edit api')
          this.service.getEditPayerData(this.tabFields.payerId).then(resp=>{
            this.tabFields.payerData=resp.Payors[0].PayorName+","+resp.Payors[0].Address1+","+resp.Payors[0].Address2+","+resp.Payors[0].City+","+resp.Payors[0].State+","
            console.log(this.tabFields.payerData,"edit data of payer")
            console.log(resp.Payors[0].Address1,"edit payors")
          })
        }
        this.tabFields.adjusterId=this.insuranceEditData.AdjusterId
        console.log(this.tabFields.adjusterId,"adj id")
        if(this.tabFields.adjusterId !== null){
          this.service.getAdjusterData("").then(resp=>{
            this.editAdjuster=resp.OrganizationMembers.find(
              (group: any) =>{
                console.log(group.PartnerMemberId )
                if(group.PartnerMemberId ===  this.tabFields.adjusterId){
                  return group
                }
              })
              this.tabFields.adjuster=this.editAdjuster.PartnerOrganizationName+","+this.editAdjuster.AddressLine1+","+this.editAdjuster.AddressLine2+","+this.editAdjuster.City+","+this.editAdjuster.State+","+this.editAdjuster.ZipCode+","+this.editAdjuster.ContactPhone+","+this.editAdjuster.PhoneNumber
          })
        }
        this.tabFields.effectiveTo = this.insuranceEditData.ExpirationDate.substr(0, 10);
        this.tabFields.effectiveFrom = this.insuranceEditData.EffectiveFrom.substr(0, 10);
        (this.tabFields.claim = this.insuranceEditData.ClaimNumber);
        (this.tabFields.payer = this.insuranceEditData.PayorName),
        (this.tabFields.policyAmount = this.insuranceEditData.PolicyAmount),
        (this.tabFields.approxSpentAmount =this.insuranceEditData.ApproxSpentAmount),
        (this.tabFields.address1=this.insuranceEditData.Address1),
        (this.tabFields.address2=this.insuranceEditData.Address2),
        (this.tabFields.phoneNumber=this.insuranceEditData?.PhoneNumber),
        (this.tabFields.selectedAdjusterId=this.insuranceEditData.AdjusterId),
        (this.tabFields.selectedPayerId=this.insuranceEditData.PayorId),
        (this.tabFields.policy = this.insuranceEditData.PolicyNumber),
        (this.tabFields.relationshiptoInsured = this.masterData.find(
          (group: any) =>
            group.GroupId === 21 &&
            group.Id === this.insuranceEditData.InsuredRelationshipTypeId
        )?.Name),
        (this.tabFields.relationId = this.masterData.find(
          (group: any) =>
            group.GroupId === 21 &&
            group.Name === this.tabFields.relationshiptoInsured
        )?.Id),
        (this.tabFields.state = this.masterData.find(
          (group: any) =>
            group.GroupId === 6 &&
            group.Id === this.insuranceEditData.StateId,
        )?.Name),
          (this.tabFields.stateId = this.masterData.find(
            (group: any) =>
              group.GroupId === 6 &&
              group.Name === this.tabFields.state,
              console.log(this.tabFields.state,this.tabFields.stateId,"state data")
          )?.Id),
          (this.tabFields.status = this.masterData.find(
            (group: any) =>
              group.GroupId === 50 &&
              group.Id === this.insuranceEditData.StatusId
          )?.Name),
          (this.tabFields.selectedStatusId = this.masterData.find(
            (group: any) =>
              group.GroupId === 50 &&
              group.Name === this.tabFields.status
          )?.Id),
          (this.tabFields.priority = this.masterData.find(
            (group: any) =>
              group.GroupId === 22 &&
              group.Id === this.insuranceEditData.PriorityId
          )?.Name),
          (this.tabFields.selectedPriorityId = this.masterData.find(
            (group: any) =>
              group.GroupId === 22 &&
              group.Name === this.tabFields.priority
          )?.Id),
          console.log(this.insuranceEditData, 'ins details in dailog');
        console.log(this.tabFields, 'tab fields edit data');
      });
    }
  }
}

