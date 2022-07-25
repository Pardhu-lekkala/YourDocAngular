import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  insuranceData:any=[]
  token='eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTg3MjY0MjksImV4cCI6MTY1ODc2MjQyOSwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTg3MjY0MjgsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiIyNzgzRERGRjM5REU0OUEyMDQ1MTREQjk5MTRERjJCRSIsInNpZCI6IkJEOEExNkE5N0MyN0I2MDg2RDlFOEQ0N0ZDMUNDREE0IiwiaWF0IjoxNjU4NzI2NDI5LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.Dqipg77YGyG3S3235sST2JqDgTWLiSXi3Yh9M6KGFp09NG2aFgWAl3GZhxwxj9me9XX70TL5sh-sOhiVenEQ24IPv_NTFeJrPrVFhfWHdSqpGZED57rOuMLCesEa8eeLBAGNsT0wQBRobhTkbFjljCxbsDt9rob-er6y82EJj23bI0Jrkxj9aQMQj2fQzmbToHc3XGCn94O3trDSwTcfqD0eg10U0vTCD3ljJnJF3YmKfjiVY0VYQj9IZZaRqgRUb-lkcPs297611HieUXgZnsH80GoFGSEP-hhzXQ73utXM25DCRFFme0uN_Lv6VyS4Kz0aKYLSZmoFY_ozGdUTAOafWyZE4KfCJRHEg7XSG_t--03F5C_d5I9fqCwm_DDZS0YnqvYE8klzI0tm72fgWLC_vnAcN6F_ZVu1ZwB1yVfQxf7194JjnucP0FzNgpsQXG_IX2yXpMcmy12-VL_2eGp6S4qdTCZf_3ulmfG-soSStBgJHWQ_yNa1vhBx78U2nnjOhzaWcVG6FSZlRLhP-wGPFragVFIHPEVngK5jPAbhIfuWbpWMNAo2NVOupdRlBAny5E57t-ZMr6-9sS96dJai34Yx3THe6jE7VIoD00sexEV-1Lsg0jFZ8ObGKuKFpmDGnglB2-FiTHx8NUxKryDTH0PGqv56evTLvfO6pRM'
  patientId=7466
  episodeId=9425
  PartnerOrganizationMemberIds=1
  PartnerOrganizationIds=1
  OrganizationTypeIds=4
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
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${this.PartnerOrganizationMemberIds}&PartnerOrganizationIds=${this.PartnerOrganizationIds}&OrganizationTypeIds=${this.OrganizationTypeIds}&MemberName=${value}&ItemsPerPage=${10}&Page=${1}`,{
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

  postInsuranceData(data:any){
    axios.post('https://apidevv2.yourdrs.com/v1/Patient/Payor',data,{headers: {
      Authorization: 'Bearer ' + this.token,
      "Access-Control-Allow-Origin": "*"
    }})
    .then((response) => {
      console.log(response,"response post")
    })
    .catch((error) => {
       console.log(error,"error post")
    });
  }


}

///v1/PartnerOrganization/Member

