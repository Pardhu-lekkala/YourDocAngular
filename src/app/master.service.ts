import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  insuranceData:any=[]
  token='eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTgzNzYxNTYsImV4cCI6MTY1ODQxMjE1NiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTgzNzYxNTUsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiJCRDY3QzQ1RjUyNjg5QzAwRjQ0OUQ5NDlDRUNEREUyRiIsInNpZCI6IjVEOEE4MTUyMTVCOTMzRkY5OTZERjhEMjMyODhCQjBCIiwiaWF0IjoxNjU4Mzc2MTU2LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.mBs-8jswrThdr0ifWpdGmBO29secnxnKwz_wsrGiamU55uUKeH2zquZ_0_Pp8QOWDLGRaatPvg9Sc4TEKKX68KedCpibYMTxhfAQmH2p0i_qI1_MUH9HUAy8rU__oG6qHZXh-v2PkNWwe9cOMVxjhTgzPvscEnZzo8k9vc_SQ7nUMSsZ78iN5oGd5e-9P-dyMutEHm6ThpkreX6UfB-7Y824guKXKCMPFyRIrHR_qFqmaPUdcHN_8xZQKWhytuBLq22qXnQXU_XUmbc72TrIJxFlnt3iPjeoZ_dncVtfQbdamlNz_vPZHN_bqJfZnewI41ijGh1vAjk7kVzAUL6FAtP6XTor-bIDS8NL4_q7m0Xbys-rH9FdhHujPhek3qKEGncsMCRyHRklq5UgcUccOgyaiMHKz1ZFdV5Aazlmx7qzcaeghokf1SJEmXTiTjt9FMlm8p7ul03c0VRDqwDUD5nygvR8HBkFY1_PUrd7yzLvRfgs6-4HGbarwOLwby_rI3el6deNKJJ8YCiimBIFkbRsTddBAT7_WNYmp0Ad5PoaKi_C_xIJ6XO3utqJvJZlnnqPk_LjX79pug_-oUeIjH9LJQgpylA2mOs-PSrkFb4526vBGV_jzX-pFV6WEZgNyJp6OcfKw_6rwJSS-m-fFjuSNiz0dA0RyZz5PPzk3dI'
  patientId=7466
  episodeId=9425
  PartnerOrganizationMemberIds=1
  PartnerOrganizationIds=1
  OrganizationTypeIds=1
  Page=1
  adjusterRoleId=64
  supervisorRoleId=26
  hrRoleId=25
  employeRoleId=22

  getInsuranceDatas(){
    return axios.get('https://625108bd-a4f1-4237-9f53-df4ec9fdc91d.mock.pstmn.io/getCompanies')
     .then((response) => {
        //console.log(response.data,"response from post api in services");
        return response.data
        
  }).catch((error)=>{console.log(error)})
  }

  getMasterData(){
    return axios.get('https://apidevv2.yourdrs.com/v1/Common/GetMasterData',{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      console.log(response,"master api res")
      return response.data
    }).catch((error)=>{
      console.log(error,"master api err")
    })
  }

  getInsuranceDetails(){
    return axios.get(`https://apidevv2.yourdrs.com/v1/Patient/${this.patientId}/Payors?EpisodeId=${this.episodeId}`,{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      this.insuranceData=response.data
      //console.log(response,"insurance details res")
      return response.data
    }).catch((error)=>{
      console.log(error,"insurance details err")
    })
  }

  getAdjusterData(value:any){
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${this.PartnerOrganizationMemberIds}&PartnerOrganizationIds=${this.PartnerOrganizationIds}&OrganizationTypeIds=${this.OrganizationTypeIds}&MemberName=${value}&RoleIds=${this.adjusterRoleId}&ItemsPerPage=10&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"adjuster resp details err")
    })
  }

  getSupervisorData(value:any){
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${this.PartnerOrganizationMemberIds}&PartnerOrganizationIds=${this.PartnerOrganizationIds}&OrganizationTypeIds=${this.OrganizationTypeIds}&MemberName=${value}&RoleIds=${this.supervisorRoleId}&ItemsPerPage=10&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"supervisor resp details err")
    })
  }

  getHRData(value:any){
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${this.PartnerOrganizationMemberIds}&PartnerOrganizationIds=${this.PartnerOrganizationIds}&OrganizationTypeIds=${this.OrganizationTypeIds}&MemberName=${value}&RoleIds=${this.hrRoleId}&ItemsPerPage=10&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"HR resp details err")
    })
  }

  getPayerData(value:any){
      return axios.get(`https://apidevv2.yourdrs.com/v1/Payor?PayorName=${value}&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"payer resp details err")
    })
   
  }

  getEmployesData(value:any){
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${this.PartnerOrganizationMemberIds}&PartnerOrganizationIds=${this.PartnerOrganizationIds}&OrganizationTypeIds=${this.OrganizationTypeIds}&MemberName=${value}&RoleIds=${this.employeRoleId}&ItemsPerPage=${10}&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"employ resp details err")
    })
  }

  getEditPayerData(id:any){
    return axios.get(`https://apidevv2.yourdrs.com/v1/Payor?PayorIds=${id}&ItemsPerPage=${1}&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + this.token,
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"payer resp details err")
    })
  }
}

///v1/PartnerOrganization/Member

