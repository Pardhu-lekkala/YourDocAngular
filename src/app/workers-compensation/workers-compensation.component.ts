import { Component, OnInit, Inject,Output,EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from '../master.service';
import { FormControl } from '@angular/forms';
//WorkersCompensationComponent

@Component({
  selector: 'app-workers-compensation',
  templateUrl: './workers-compensation.component.html',
  styleUrls: ['./workers-compensation.component.css']
})

export class WorkersCompensationComponent implements OnInit {
 
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
  supervisorData: any = [];
  employerData:any=[];
  hrData: any = [];
  insuranceEditData: any = [];
  filterPayers: any = [];
  editAdjuster: any = [];
  editEmployer:any=[];
  editSupervisor:any=[];
  editHr:any=[]
  isEditMode: Boolean;
  clickType:string
  insuranceId: any;
  validate=false;
  postResponse=false
  tabFields = {
    initialTabId:1,
    selectedPayerId:'',
    selectedAdjusterId:'',
    selectedSupervisorId:'',
    selectedHRId:'',
    selectedEmployerId:'',
    selectedStatusId:29,
    selectedPriorityId:1,
    selectedTableId:'',
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
    effectiveFrom: '',
    effectiveTo: '',
    relationshiptoInsured: '',
    relationId:'',
    stateId:'',
    status: '',
    policy: '',
    claim: '',
    insuranceId: '',
    groupId: '',
    priority: '',
    copay: '',
    copayAmount: '',
    payerName: '',
    payerId:'',
    adjusterId:'',
    supervisorId:'',
    hrId:'',
    employerId:'',
    policyAmount: '',
    approxSpentAmount: '',
    wcb: '',
    carrierCase: '',
    carrierId: '',
    adjuster: '',
    supervisor: '',
    HR: '',
    employer:'',
    otherInfo: '',
    payerData:'',
  };

  @Output() validateDataEvent=new EventEmitter()
  constructor(
    private service: MasterService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDataChange(value: any, key: string) {
    switch (key) {
      case 'wcb':
        this.tabFields.wcb = value;
        break;
      case 'relation':
        this.tabFields.relationshiptoInsured = value;
        this.tabFields.relationId = this.masterData.find(
          (group: any) =>
            group.GroupId === 21 &&
            group.Name === value
        )?.Id
        console.log(this.tabFields.relationshiptoInsured,this.tabFields.relationId,"rel in case")
        break;
      case 'state':
        this.tabFields.state = value;
        this.tabFields.stateId = this.masterData.find(
          (group: any) =>
            group.GroupId === 6 &&
            group.Name === value
        )?.Id
        console.log(this.tabFields.stateId,this.tabFields.state,"rel id")
        break;
      case 'status':
        this.tabFields.status = value;
        if(value==='Active'){
          this.tabFields.selectedStatusId=29
        }else{
          this.tabFields.selectedStatusId=31
        }
        break;
      case 'carrierCase':
        this.tabFields.carrierCase = value;
        break;
      case 'carrierId':
        this.tabFields.carrierId = value;
        break;
      case 'city':
        this.tabFields.city = value;
        break;
      case 'otherInfo':
        this.tabFields.otherInfo = value;
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
        console.log(this.tabFields.selectedPriorityId,"id of priority")
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
      case 'insId':
        this.tabFields.insuranceId = value;
        break;
      case 'groupId':
        this.tabFields.groupId = value;
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
      case 'copayAmount':
        this.tabFields.copayAmount = value;
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
        case 'supervisor':
          this.tabFields.supervisor = value;
          this.searchType = 'supervisor';
          if (this.tabFields.supervisor.length % 2 === 0) {
            this.service.getSupervisorData(value).then((resp) => {
              this.supervisorData = resp.OrganizationMembers;
              console.log(this.supervisorData, 'supervisor data');
            });
          }
          break;

          case 'hr':
            this.tabFields.HR = value;
            this.searchType = 'hr';
            if (this.tabFields.HR.length % 2 === 0) {
              this.service.getHRData(value).then((resp) => {
                this.hrData = resp.OrganizationMembers;
                console.log(this.hrData, 'hr data');
              });
            }
            break;
            case 'employer':
              this.tabFields.employer = value;
              this.searchType = 'employe';
              if (this.tabFields.employer.length % 2 === 0) {
                this.service.getEmployesData(value).then((resp) => {
                  this.employerData = resp.OrganizationMembers;
                  console.log(this.hrData, 'hr data');
                });
              }
              break;
    }
    this.dropClick = false;
    console.log(key, value, 'data on change');
    console.log(this.tabFields.payerData,"sssssssssssssssssssssssssssssss")
  }

  setPayerValue(payerId:any,val1: any,val2:any,val3:any,val4:any,val5:any, click: any, type: any) {
    this.tabFields.payerData = val1+","+val2+","+val3+","+val4+","+val5;
    this.tabFields.selectedPayerId=payerId
    this.dropClick = click;
    console.log(this.tabFields.payerData, 'drop payer val');
    console.log(this.tabFields.selectedPayerId,"id of payer")
  }

  setAdjusterValue(adjusterId:any,val1: any,val2:any,val3:any,val4:any,val5:any,val6:any,val7:any,val8:any, click: any, type: any) {
    this.tabFields.adjuster = val1+","+val2+","+val3+","+val4+","+val5+","+val6+","+val7+","+val8
    this.tabFields.selectedAdjusterId=adjusterId
    this.dropClick = click;
  }

  setSupervisorValue(supervisorId:any,val1: any,val2:any, click: any, type: any) {
    this.tabFields.supervisor = val1+" "+val2
    this.tabFields.selectedSupervisorId=supervisorId
    this.dropClick = click;
    console.log(this.tabFields.selectedSupervisorId, 'drop payer val');
  }

  setHrValue(hrId:any,val1: any,val2:any, click: any, type: any) {
    this.tabFields.HR = val1+" "+val2;
    this.tabFields.selectedHRId=hrId
    this.dropClick = click;
    console.log(this.tabFields.selectedHRId, 'drop payer val');
  }

  setEmployeValue(employerId:any,val1: any,val2:any,val3:any,val4:any,val5:any,val6:any,val7:any,val8:any, click: any, type: any) {
    this.tabFields.employer= val1+","+val2+","+val3+","+val4+","+val5+","+val6+","+val7+","+val8
    this.tabFields.selectedEmployerId=employerId
    this.dropClick = click;
    console.log(this.tabFields.employer, 'drop payer val');
  }

  /*******************************VALIDATIONS*******************************************/
  fieldValidations(type:string){
    if((this.tabFields.relationshiptoInsured ==="" || this.tabFields.payerData==="")&& type==="workersComp"){
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
    // this.clickType=type
    // console.log(this.clickType,"clicktype") 
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

  // getRelationid(e:any){
  //   this.tabFields.relationId=e.target.value
  //   console.log(this.tabFields.relationId,"rel id")
  // }

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

    if (this.isEditMode === true && this.data.editTabData === "Worker's Compensation") {
      this.service.getInsuranceDetails().then((resp) => {
        this.insuranceEditData = resp.find(
          (item: any) => item.Id === this.editTableId
        );
        /******************************Edit payer************************************/
        this.tabFields.payerId = this.insuranceEditData.PayorId
        if(this.tabFields.payerId !== ''){
          console.log('called edit api')
          this.service.getEditPayerData(this.tabFields.payerId).then(resp=>{
            this.tabFields.payerData=resp.Payors[0].PayorName+","+resp.Payors[0].Address1+","+resp.Payors[0].Address2+","+resp.Payors[0].City+","+resp.Payors[0].State+","
            console.log(this.tabFields.payerData,"edit data of payer")
            console.log(resp.Payors[0].Address1,"edit payors")
          })
        }
        /*************************Edit adjuster*****************************************/
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
        /*****************************Edit employer******************************/
        this.tabFields.employerId=this.insuranceEditData.EmployerId
        console.log(this.tabFields.employerId,"emp id")
        if(this.tabFields.employerId !== null){
          this.service.getEmployesData("").then(resp=>{
            console.log(resp,"emp edit called")
            this.editEmployer=resp.OrganizationMembers.find(
              (group: any) =>{
                if(group.PartnerMemberId ===  this.tabFields.employerId){
                  return group
                }
              })
              this.tabFields.employer=this.editEmployer?.PartnerOrganizationName+","+this.editEmployer?.AddressLine1+","+this.editEmployer?.AddressLine2+","+this.editEmployer?.City+","+this.editEmployer?.State+","+this.editEmployer?.ZipCode+","+this.editEmployer?.ContactPhone+","+this.editEmployer?.PhoneNumber
          })
        }
        /*****************************Edit supervisor*************************************/
        this.tabFields.supervisorId=this.insuranceEditData.SupervisorId
        if(this.tabFields.supervisorId !== null){
          this.service.getSupervisorData("").then(resp=>{
            this.editSupervisor=resp.OrganizationMembers.find(
              (group: any) =>{
                if(group.PartnerMemberId ===  this.tabFields.supervisorId){
                  return group
                }
              })
              this.tabFields.supervisor=this.editSupervisor?.FirstName+" "+this.editSupervisor?.LastName
          })
        }
        /***********************************Edit hr**********************************************/
        this.tabFields.hrId=this.insuranceEditData.HrId
        console.log(this.tabFields.hrId,"hr id")
        if(this.tabFields.hrId !== null){
          this.service.getHRData("").then(resp=>{
            console.log(resp,"hr edit called")
            this.editHr=resp.OrganizationMembers.find(
              (group: any) =>{
                if(group.PartnerMemberId ===  this.tabFields.hrId){
                  return group
                }
              })
              this.tabFields.HR=this.editHr?.FirstName+" "+this.editHr?.LastName
          })
        }
        /*******************************************************************************************/
        this.tabFields.effectiveTo = this.insuranceEditData.ExpirationDate,
        this.tabFields.effectiveFrom = this.insuranceEditData.EffectiveFrom,
        (this.tabFields.insuranceId = this.insuranceEditData.InsuranceId),
          (this.tabFields.groupId = this.insuranceEditData.GroupId),
          (this.tabFields.copay = this.insuranceEditData.CopayType),
          (this.tabFields.copayAmount = this.insuranceEditData.Amount),
          (this.tabFields.claim = this.insuranceEditData.ClaimNumber),
        (this.tabFields.payerId = this.insuranceEditData.PayorId),
          (this.tabFields.policyAmount = this.insuranceEditData.PolicyAmount),
          (this.tabFields.approxSpentAmount =
            this.insuranceEditData.ApproxSpentAmount),
          (this.tabFields.wcb = this.insuranceEditData.Wcb),
        (this.tabFields.carrierCase = this.insuranceEditData.CarrierCaseNumber),
        (this.tabFields.carrierId = this.insuranceEditData.Carrierid),
        (this.tabFields.city = this.insuranceEditData.City),
        (this.tabFields.policy = this.insuranceEditData.PolicyNumber),
        (this.tabFields.otherInfo = this.insuranceEditData.OtherInformation),
        (this.tabFields.address1=this.insuranceEditData.Address1),
        (this.tabFields.address2=this.insuranceEditData.Address2),
        (this.tabFields.phoneNumber=this.insuranceEditData?.PhoneNumber),
        (this.tabFields.selectedAdjusterId=this.insuranceEditData.AdjusterId),
        (this.tabFields.selectedPayerId=this.insuranceEditData.PayorId),
        (this.tabFields.selectedSupervisorId=this.insuranceEditData.SupervisorId),
        (this.tabFields.selectedEmployerId=this.insuranceEditData.EmployerId),
        (this.tabFields.selectedHRId=this.insuranceEditData.HrId),
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
        console.log(this.tabFields.selectedTableId, 'tab fields edit data');
      });
    }
  }
}

