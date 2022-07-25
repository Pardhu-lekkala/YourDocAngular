import { Component, OnInit, Inject,Output,EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from '../master.service';
import { FormControl } from '@angular/forms';
//CommercialComponent

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})

export class CommercialComponent implements OnInit {
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
  insuranceEditData: any = [];
  filterPayers: any = [];
  isEditMode: Boolean;
  validate=true
  clickType:string
  insuranceId: any;
  tabFields = {
    initialTabId:14,
    effectiveFrom: '',
    effectiveTo: '',
    relationshiptoInsured: '',
    status: '',
    priority: '',
    copay: '',
    copayAmount: '',
    payerId:'',
    payerData:'',
    policyAmount: '',
    approxSpentAmount: '',
    insuranceId: '',
    groupId: '',
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
        break;
      case 'status':
        this.tabFields.status = value;
        break;
      case 'priority':
        this.tabFields.priority = value;
        break;
      case 'insId':
        this.tabFields.insuranceId = value;
        break;
      case 'groupId':
        this.tabFields.groupId = value;
        break;
      case 'effectiveFrom':
        this.tabFields.effectiveFrom = value;
        break;
      case 'effectiveTo':
        this.tabFields.effectiveTo = value;
        break;
      case 'policyAmount':
        this.tabFields.policyAmount = value;
        break;
      case 'approxAmount':
        this.tabFields.approxSpentAmount = value;
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
    }
    this.dropClick = false;
    console.log(key, value, 'data on change');
  }

  setPayerValue(val1: any,val2:any,val3:any,val4:any,val5:any, click: any, type: any) {
    this.tabFields.payerData = val1+","+val2+","+val3+","+val4+","+val5;
    this.dropClick = click;
    console.log(this.tabFields.payerData, 'drop payer val');
  }


  /*******************************VALIDATIONS*******************************************/
  fieldValidations(type:string){
    if((this.tabFields.payerData==="")&& type==="commercial"){
      this.validate=true
    }else{
      this.validate=false
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

    if (this.isEditMode === true && this.data.editTabData==="Commercial") {
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
        this.tabFields.effectiveTo = this.insuranceEditData.ExpirationDate;
        this.tabFields.effectiveFrom = this.insuranceEditData.EffectiveFrom;
          (this.tabFields.copay = this.insuranceEditData.CopayType),
          (this.tabFields.copayAmount = this.insuranceEditData.Amount),
        //(this.tabFields.payerId = this.insuranceEditData.PayorId),
        (this.tabFields.insuranceId = this.insuranceEditData.InsuranceId),
          (this.tabFields.groupId = this.insuranceEditData.GroupId),
          (this.tabFields.policyAmount = this.insuranceEditData.PolicyAmount),
          (this.tabFields.approxSpentAmount =
            this.insuranceEditData.ApproxSpentAmount),
        (this.tabFields.relationshiptoInsured = this.masterData.find(
          (group: any) =>
            group.GroupId === 21 &&
            group.Id === this.insuranceEditData.InsuredRelationshipTypeId
        )?.Name),
          (this.tabFields.status = this.masterData.find(
            (group: any) =>
              group.GroupId === 50 &&
              group.Id === this.insuranceEditData.StatusId
          )?.Name),
          (this.tabFields.priority = this.masterData.find(
            (group: any) =>
              group.GroupId === 22 &&
              group.Id === this.insuranceEditData.PriorityId
          )?.Name),
          console.log(this.insuranceEditData, 'ins details in dailog');
        console.log(this.tabFields, 'tab fields edit data');
      });
    }
  }
}


