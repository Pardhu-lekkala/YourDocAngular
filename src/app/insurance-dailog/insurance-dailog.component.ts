import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from '../master.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-insurance-dailog',
  templateUrl: './insurance-dailog.component.html',
  styleUrls: ['./insurance-dailog.component.css'],
})
export class InsuranceDailogComponent implements OnInit {
  control = new FormControl('');
  tab: any;
  editTableId: any;
  emailTem: any;
  dropClick: boolean;
  searchType: string;
  masterData = JSON.parse(window.localStorage['masterData']);
  isEditMode: Boolean;
  insuranceEditData: any = [];
  clickType: string;
  insuranceId: any;
  validatorComp: boolean;
  validatorLiability: boolean;
  validateAuto: boolean;
  validateNjPip: boolean;
  validateCommercial: boolean;
  commercialDialogData: any;
  constructor(
    //private dialogRef: MatDialogRef<InsuranceDailogComponent>,
    private service: MasterService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  getTab(tabData: string) {
    this.tab = tabData;
    console.log(this.tab, 'tab in get');
  }
  postResponse(event: any) {
    console.log(event, 'cfsgh');
  }

  dataValidator(value: any) {
    if (this.tab === 'Worker’s Compensation') {
      this.validatorComp = value;
      this.validatorLiability = false;
      this.validateAuto = false;
      this.validateCommercial = false;
      this.validateNjPip = false;
    }
    if (this.tab === 'Liability') {
      this.validatorLiability = value;
      this.validatorComp = false;
      this.validateAuto = false;
      this.validateCommercial = false;
      this.validateNjPip = false;
    }
    if (this.tab === 'Auto Accident') {
      this.validateAuto = value;
      this.validatorComp = false;
      this.validatorLiability = false;
      this.validateCommercial = false;
      this.validateNjPip = false;
    }
    if (this.tab === 'NJ - PIP') {
      this.validateNjPip = value;
      this.validatorComp = false;
      this.validateAuto = false;
      this.validateCommercial = false;
      this.validatorLiability = false;
    }
    if (this.tab === 'Commercial') {
      this.validateCommercial = value;
      this.validatorComp = false;
      this.validateAuto = false;
      this.validatorLiability = false;
      this.validateNjPip = false;
    }
  }

  ngOnInit(): void {
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

    if (this.isEditMode === true) {
      this.service.getInsuranceDetails().then((resp) => {
        this.insuranceEditData = resp.find(
          (item: any) => item.Id === this.editTableId
        );
        console.log(this.insuranceEditData, 'ins details in dailog');
      });
    }
  }

  testMethord(event: any) {
    console.log('i got data from commercial', event);
    this.commercialDialogData = event;
    //this.dialogRef.close(this.commercialDialogData); 
  }
}
