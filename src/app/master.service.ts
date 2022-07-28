import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  insuranceData: any = [];
  token =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTg5ODUxMjksImV4cCI6MTY1OTAyMTEyOSwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTg5ODUxMjgsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiIzN0FFRjIzMjRCMTMyNEREM0EyQTU2N0FGNUIxOUVERiIsInNpZCI6IkY5MzA2MDEzNzNEM0NENzY1RDMzN0E2MzgxNTgyQ0VDIiwiaWF0IjoxNjU4OTg1MTI5LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.EyRbr1otxCeaOwXhfRfJk-zxepfZLSJpH4rsN4phOyA6sWXv_KM1GC-GU0yGdRQE5tX2BxjzwK4eYFCUJ11cKBKFW0b5iSpYXb4L7snD1m6BRtdSl03XRXATWBzadjq3DvuS9FwVBmln6j9r3Ap48VyEPPTTBylfFJdRAwe9D3ZMz3svoAJ5cnWcYopDYnUNjNq6Ek7qOYNq2pjkXp731hEwOId-84ytCeHqXoYa6Z9B2Jx3JEMuAFMepc79ZfH_XdPfB5E5KoRPLvzsJekt50RSY8eRemOitQWzF-_15sHkPuM7PB_INzWQWhkFfgOt8W7sIBf2AMjDYbwtgkxbIanoeejX9vDlM0Goc5_NMt8KwQnTxjrYJjXx8GkuJsEh8aEW3K6N0cUbdDEzyV3gA73Ob-TgGYJn7rfu71V7KxYCsj3hPqMpfwHUMha5RH7AhNE0xLjjW5dcHhBdJ0WQTE0skJsd-DFzVcIsdMa9HIspbr-4w5_Js6CofUHnTCoMo3luG5H7CL_vyw0jO3x9hTijeEWAEIe-p-_sjNp9V3fRT__-QJdwBm7O4MLq1jeI4FwZ13WBmw0GHWNCzMBut5nznd4DZ7Nbqz9Cez9CHTOy0KhGgdWigTidzpmHUZXSL_Pg_5n5K3BpXTIOfqYF0XpTqesJNKE5uGEZgG6Vu0M';
  patientId = 7466;
  episodeId = 9425;
  PartnerOrganizationMemberIds = 1;
  PartnerOrganizationIds = 1;
  OrganizationTypeIds = 4;
  Page = 1;
  adjusterRoleId = 64;
  supervisorRoleId = 26;
  hrRoleId = 25;
  employeRoleId = 22;

  data= {
    "PatientPayor": {
      "Id": 41772,
      "PayorId": 880,
      "PatientId": 7466,
      "PriorityId": 1,
      "InsuranceCaseTypeId": 14,
      "StatusId": 29,
      "EpisodeId": 9425
    },
    "OtherInfo": {
      "PatientPayorId": 41772,
      "InsuranceId": "sd234234",
      "GroupId": null,
      "EffectiveFrom": "2022-06-14T07:17:37.948Z",
      "CopayType": null,
      "Amount": null,
      "ExpirationDate": null,
      "IsLeanDocumentAttached": false,
      "MaxAmount": null,
      "InsuredRelationshipTypeId": 119,
      "CityInformation": null,
      "OtherInformation": null,
      "StateId": null,
      "Wcb": "G2713324",
      "PolicyAmount": null,
      "ApproxSpentAmount": null,
      "IsCaseOpenAndActive": false,
      "IsCaseEstablished": false,
      "Carrierid": null,
      "ClaimNumber": null,
      "AdjusterId": null,
      "CarrierCaseNumber": null,
      "EmployerId": null,
      "SupervisorId": null,
      "HrId": null,
      "PolicyNumber": null
    },
    "InsuredInfo": {
      "PatientPayorsId": null,
      "InsuredFirstName": "firstname",
      "InsuredLastName": "lastname",
      "InsuredDob": "2022-07-25T11:51:43.189Z",
      "InsuredAddressline1": "110 South Jefferson Road Suite 201",
      "InsuredAddressline2": "",
      "InsuredCity": "vizag",
      "InsuredStateId": 41,
      "InsuredZip": "531116",
      "InsuredPhoneNumber": "125425253",
      "InsuredGender": "m",
      "InsuredSSN": "1111"
    }
  }
  
  assignPostData(fields:any){
    console.log(fields,"fields1")
    this.data.PatientPayor.Id=fields.selectedTableId?fields.selectedTableId:0
    this.data.PatientPayor.PayorId=fields.selectedPayerId?fields.selectedPayerId:null
    this.data.PatientPayor.InsuranceCaseTypeId=fields.initialTabId?fields.initialTabId:null
    this.data.PatientPayor.PatientId=7466
    this.data.PatientPayor.EpisodeId=9425
    this.data.PatientPayor.PriorityId=fields.selectedPriorityId?fields.selectedPriorityId:null
    this.data.PatientPayor.StatusId=fields.selectedStatusId?fields.selectedStatusId:null
    this.data.OtherInfo.PatientPayorId=fields.selectedTableId?fields.selectedTableId:0
    this.data.OtherInfo.InsuredRelationshipTypeId=fields.relationId?fields.relationId:null
    this.data.OtherInfo.CityInformation=fields.city?fields.city:null
    this.data.OtherInfo.OtherInformation=fields.otherInfo?fields.otherInfo:null
    this.data.OtherInfo.StateId=fields.stateId?fields.stateId:null
    this.data.OtherInfo.Wcb=fields.wcb?fields.wcb:null
    this.data.OtherInfo.Carrierid=fields.carrierId?fields.carrierId:null
    this.data.OtherInfo.CarrierCaseNumber=fields.carrierCase?fields.carrierCase:null
    this.data.OtherInfo.AdjusterId=fields.selectedAdjusterId?fields.selectedAdjusterId:null
    this.data.OtherInfo.EmployerId=fields.selectedEmployerId?fields.selectedEmployerId:null
    this.data.OtherInfo.SupervisorId=fields.selectedSupervisorId?fields.selectedSupervisorId:null
    this.data.OtherInfo.HrId=fields.selectedHRId?fields.selectedHRId:null
    this.data.OtherInfo.PatientPayorId=fields.selectedTableId?fields.selectedTableId:0
    this.data.InsuredInfo.PatientPayorsId=fields.selectedTableId?fields.selectedTableId:0
    if( this.data.OtherInfo.InsuredRelationshipTypeId !== 119){
      this.data.InsuredInfo.InsuredFirstName=fields.firstName?fields.firstName:null
      this.data.InsuredInfo.InsuredLastName=fields.lastName?fields.lastName:null
      this.data.InsuredInfo.InsuredDob=fields.dob?fields.dob:null
      this.data.InsuredInfo.InsuredAddressline1=fields.address1?fields.address1:null
      this.data.InsuredInfo.InsuredAddressline2=fields.address2?fields.address2:null
      this.data.InsuredInfo.InsuredCity=fields.city?fields.city:null
      this.data.InsuredInfo.InsuredStateId=fields.stateId
      this.data.InsuredInfo.InsuredZip=fields.zip?fields.zip:null
      this.data.InsuredInfo.InsuredPhoneNumber=fields.phoneNumber?fields.phoneNumber.toString():null
      this.data.InsuredInfo.InsuredGender=fields.gender?fields.gender:null
      this.data.InsuredInfo.InsuredSSN=fields.ssn?fields.ssn:null
    }
    /******************************************************************** */
    this.data.OtherInfo.PolicyNumber=fields.policyNumber?fields.policyNumber:null
    this.data.OtherInfo.InsuranceId=fields.insuranceId?fields.insuranceId:null
    this.data.OtherInfo.GroupId=fields.groupId?fields.groupId:null
    this.data.OtherInfo.EffectiveFrom=fields.effectiveFrom?fields.effectiveFrom:null
    this.data.OtherInfo.CopayType=fields.copayType?fields.copayType:null
    this.data.OtherInfo.Amount=fields.copayAmount?fields.copayAmount:null
    this.data.OtherInfo.ExpirationDate=fields.effectiveTo?fields.effectiveTo:null
    this.data.OtherInfo.IsLeanDocumentAttached=false
    this.data.OtherInfo.MaxAmount=fields.MaxAmount?fields.MaxAmount:null
    this.data.OtherInfo.PolicyAmount=fields.policyAmount?fields.policyAmount:null
    this.data.OtherInfo.ApproxSpentAmount=fields.approxSpentAmount?fields.approxSpentAmount:null
    this.data.OtherInfo.IsCaseOpenAndActive=false
    this.data.OtherInfo.IsCaseEstablished=false
    this.data.OtherInfo.ClaimNumber=fields.claim?fields.claim:null
    console.log(fields,"fields")
    console.log(this.data,"id of table")
  }

  getInsuranceDatas() {
    return axios
      .get(
        'https://625108bd-a4f1-4237-9f53-df4ec9fdc91d.mock.pstmn.io/getCompanies'
      )
      .then((response) => {
        //console.log(response.data,"response from post api in services");
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMasterData() {
    return axios
      .get('https://apidevv2.yourdrs.com/v1/Common/GetMasterData', {
        headers: {
          Authorization: 'Bearer ' + this.token,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        console.log(response, 'master api res');
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'master api err');
      });
  }

  getInsuranceDetails() {
    return axios
      .get(
        `https://apidevv2.yourdrs.com/v1/Patient/${this.patientId}/Payors?EpisodeId=${this.episodeId}`,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        this.insuranceData = response.data;
        //console.log(response,"insurance details res")
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'insurance details err');
      });
  }

  getAdjusterData(value: any) {
    return axios
      .get(
        `https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${
          this.PartnerOrganizationMemberIds
        }&PartnerOrganizationIds=${
          this.PartnerOrganizationIds
        }&OrganizationTypeIds=${
          this.OrganizationTypeIds
        }&MemberName=${value}&RoleIds=${
          this.adjusterRoleId
        }&ItemsPerPage=10&Page=${1}`,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'adjuster resp details err');
      });
  }

  getSupervisorData(value: any) {
    return axios
      .get(
        `https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${
          this.PartnerOrganizationMemberIds
        }&PartnerOrganizationIds=${
          this.PartnerOrganizationIds
        }&OrganizationTypeIds=${
          this.OrganizationTypeIds
        }&MemberName=${value}&RoleIds=${
          this.supervisorRoleId
        }&ItemsPerPage=10&Page=${1}`,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'supervisor resp details err');
      });
  }

  getHRData(value: any) {
    return axios
      .get(
        `https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${
          this.PartnerOrganizationMemberIds
        }&PartnerOrganizationIds=${
          this.PartnerOrganizationIds
        }&OrganizationTypeIds=${
          this.OrganizationTypeIds
        }&MemberName=${value}&RoleIds=${
          this.hrRoleId
        }&ItemsPerPage=10&Page=${1}`,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'HR resp details err');
      });
  }

  getPayerData(value: any) {
    return axios
      .get(
        `https://apidevv2.yourdrs.com/v1/Payor?PayorName=${value}&Page=${1}`,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'payer resp details err');
      });
  }

  getEmployesData(value: any) {
    return axios
      .get(
        `https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${
          this.PartnerOrganizationMemberIds
        }&PartnerOrganizationIds=${
          this.PartnerOrganizationIds
        }&OrganizationTypeIds=${
          this.OrganizationTypeIds
        }&MemberName=${value}&ItemsPerPage=${10}&Page=${1}`,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'employ resp details err');
      });
  }

  getEditPayerData(id: any) {
    return axios
      .get(
        `https://apidevv2.yourdrs.com/v1/Payor?PayorIds=${id}&ItemsPerPage=${1}&Page=${1}`,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error, 'payer resp details err');
      });
  }

  postInsuranceData(postData: any) {
    this.assignPostData(postData)
    console.log(postData,"post data")
    console.log(this.data,'data in api')
    return axios.post('https://apidevv2.yourdrs.com/v1/Patient/Payor',JSON.stringify(this.data), {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + this.token,
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        console.log(response, 'response post');
      })
      .catch((error) => {
        console.log(error, 'error post');
      });
  }

  associateAndDissociate(episodeId:any,id:any,associatePayor:any){
    let data={
      PatientPayorId:id,
      EpisodeId:episodeId,
      AssociatePayor:associatePayor
    }
    console.log(data,"associate data")
    return axios.post('https://apidevv2.yourdrs.com/v1/Episode/PatientPayor',JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + this.token,
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        console.log(response, 'response associate');
        if(response){
          this.getInsuranceDetails()
        }
      })
      .catch((error) => {
        console.log(error, 'error associate');
      });
  }

  deleteInsuranceData(id:any){
    //https://apidev2.yourdrs.com/v1/Patient/Payor?PatientPayorId={PatientPayorId}
    return axios.delete(`https://apidevv2.yourdrs.com/v1/Patient/Payor?PatientPayorId=${id}`, {
      headers: {
        Authorization: 'Bearer ' + this.token,
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        console.log(response, 'response delete');
        if(response){
          this.getInsuranceDetails()
        }
      })
      .catch((error) => {
        console.log(error, 'error delete');
      }); 
  }
}

