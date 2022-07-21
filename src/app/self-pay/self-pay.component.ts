import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from '../master.service';
import { FormControl } from '@angular/forms';

//SelfPayComponent

@Component({
  selector: 'app-self-pay',
  templateUrl: './self-pay.component.html',
  styleUrls: ['./self-pay.component.css']
})

export class SelfPayComponent implements OnInit {
  control = new FormControl('');
  tab: any;
  editTableId: any;
  emailTem: any;
  dropClick: boolean;
  searchType: string;
  masterData = JSON.parse(window.localStorage['masterData']);
  insuranceEditData: any = [];
  isEditMode: Boolean;
  clickType:string
  insuranceId: any;
  tabFields = {
    selfPay:''
  };
  constructor(
    private service: MasterService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDataChange(value: any, key: string) {
    switch (key) {
      case 'selfPay':
        this.tabFields.selfPay = value;
        break;

    }
    this.dropClick = false;
    console.log(key, value, 'data on change');
  }

  /*******************************VALIDATIONS*******************************************/
  fieldValidations(type:string){
    this.clickType=type
     console.log(this.clickType,"clicktype") 
  }


  getTab(tabData: string) {
    this.tab = tabData;
    console.log(this.tab, 'tab in get');
    //return this.tab
  }

  ngOnInit(): void {
    console.log(this.tab, 'tab data');
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

    if (this.isEditMode === true && this.data.editTabData==="Self") {
      this.service.getInsuranceDetails().then((resp) => {
        this.insuranceEditData = resp.find(
          (item: any) => item.Id === this.editTableId
        );
      });
    }

    // this.service.getAdjusterData().then((resp) => {
    //   this.adjusterData = resp.OrganizationMembers;
    //   console.log(this.adjusterData, 'adjuster data');
    // });

    // this.service.getSupervisorData().then((resp) => {
    //   this.supervisorData = resp.OrganizationMembers;
    //   console.log(this.supervisorData, 'supervisor data');
    // });

    // this.service.getHRData().then((resp) => {
    //   this.hrData = resp.OrganizationMembers;
    //   console.log(this.hrData, 'hr data');
    // });
  }
}


