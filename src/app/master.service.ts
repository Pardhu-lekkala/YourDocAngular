import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  insuranceData:any=[]

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
        Authorization: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTgxMjQ5MzYsImV4cCI6MTY1ODE2MDkzNiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTgxMjQ5MzMsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiJCNDNFRkVCRkZBNkY4QjhCRjM2REM0QjIwMzU4QTgyRCIsInNpZCI6IjA2QjUxMDY1RTM0RUUyQkY4ODNFM0YxNkFCMjhEOTJBIiwiaWF0IjoxNjU4MTI0OTM2LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.w9Kw_5I5NUFuQVWo1mJdeeeIICWUBHjXXrQgxScwQBLikJ0aEF2fMRzoPPkeiHv51onDac9219fJZCT7zyh5oTVUPHXQjLROOBk76pzI-TaEITil5CWfpbymuoBgqSIwTTmUES7W9tek-uMfMW9jFvi3v8wxzpCQ11Oxp-TRMtnO8-6SAJNpscR7b3YKiSw3q8_nGnrgo0fiVWtfNbMA8dncXsq1ZhhQbwhKNttTlTYJI9Xt1SmegiNzxdiuRIONqudisV86JCNkCfKrqWsR8tNtaXaGvoigWIp9TGBu127hTREeqJXPTWfo1H9FagwbAm7tHcqe2A7nWIC7Xh4J-KuH_Y5y76B-XJnnwTuKP7s_hSvefQcGFASBMQI_eIcsdnhmtuZb-Ipcp-otNbGdJJSOWnEHDnysE8Xk4fENr-OGq3C0xbARcmejJewYtU3ldB5bR7Iwg65uvwHRTLtJtzTNQiUKxyUGeEKuGg8O8ehTANXI030L1oz5CNvmrYOTg9KHO-k6z2iBrYZkRnEX9_Vhbbc2nda5UU3tJfvc3xUZx8ulxxNPRO7_94_Nx17a7gROIJkJkjF9GLRV0wxCMuIEeqYH3O5hnFOeDFkn8BC4HILl05vBwfWC-QFx7sTSLaOw43ujF1ewpkj1_T8ONfSElBNZqgHpRdUBUwD5Bts',
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
    return axios.get(`https://apidevv2.yourdrs.com/v1/Patient/${7466}/Payors?EpisodeId=${9425}`,{
      headers: {
        Authorization: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTgxMjQ5MzYsImV4cCI6MTY1ODE2MDkzNiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTgxMjQ5MzMsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiJCNDNFRkVCRkZBNkY4QjhCRjM2REM0QjIwMzU4QTgyRCIsInNpZCI6IjA2QjUxMDY1RTM0RUUyQkY4ODNFM0YxNkFCMjhEOTJBIiwiaWF0IjoxNjU4MTI0OTM2LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.w9Kw_5I5NUFuQVWo1mJdeeeIICWUBHjXXrQgxScwQBLikJ0aEF2fMRzoPPkeiHv51onDac9219fJZCT7zyh5oTVUPHXQjLROOBk76pzI-TaEITil5CWfpbymuoBgqSIwTTmUES7W9tek-uMfMW9jFvi3v8wxzpCQ11Oxp-TRMtnO8-6SAJNpscR7b3YKiSw3q8_nGnrgo0fiVWtfNbMA8dncXsq1ZhhQbwhKNttTlTYJI9Xt1SmegiNzxdiuRIONqudisV86JCNkCfKrqWsR8tNtaXaGvoigWIp9TGBu127hTREeqJXPTWfo1H9FagwbAm7tHcqe2A7nWIC7Xh4J-KuH_Y5y76B-XJnnwTuKP7s_hSvefQcGFASBMQI_eIcsdnhmtuZb-Ipcp-otNbGdJJSOWnEHDnysE8Xk4fENr-OGq3C0xbARcmejJewYtU3ldB5bR7Iwg65uvwHRTLtJtzTNQiUKxyUGeEKuGg8O8ehTANXI030L1oz5CNvmrYOTg9KHO-k6z2iBrYZkRnEX9_Vhbbc2nda5UU3tJfvc3xUZx8ulxxNPRO7_94_Nx17a7gROIJkJkjF9GLRV0wxCMuIEeqYH3O5hnFOeDFkn8BC4HILl05vBwfWC-QFx7sTSLaOw43ujF1ewpkj1_T8ONfSElBNZqgHpRdUBUwD5Bts',
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

  getAdjusterData(){
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${1}&PartnerOrganizationIds=${1}&OrganizationTypeIds=${1}&MemberName=${'sai'}&RoleIds=${64}&ItemsPerPage=10&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTgxMjQ5MzYsImV4cCI6MTY1ODE2MDkzNiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTgxMjQ5MzMsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiJCNDNFRkVCRkZBNkY4QjhCRjM2REM0QjIwMzU4QTgyRCIsInNpZCI6IjA2QjUxMDY1RTM0RUUyQkY4ODNFM0YxNkFCMjhEOTJBIiwiaWF0IjoxNjU4MTI0OTM2LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.w9Kw_5I5NUFuQVWo1mJdeeeIICWUBHjXXrQgxScwQBLikJ0aEF2fMRzoPPkeiHv51onDac9219fJZCT7zyh5oTVUPHXQjLROOBk76pzI-TaEITil5CWfpbymuoBgqSIwTTmUES7W9tek-uMfMW9jFvi3v8wxzpCQ11Oxp-TRMtnO8-6SAJNpscR7b3YKiSw3q8_nGnrgo0fiVWtfNbMA8dncXsq1ZhhQbwhKNttTlTYJI9Xt1SmegiNzxdiuRIONqudisV86JCNkCfKrqWsR8tNtaXaGvoigWIp9TGBu127hTREeqJXPTWfo1H9FagwbAm7tHcqe2A7nWIC7Xh4J-KuH_Y5y76B-XJnnwTuKP7s_hSvefQcGFASBMQI_eIcsdnhmtuZb-Ipcp-otNbGdJJSOWnEHDnysE8Xk4fENr-OGq3C0xbARcmejJewYtU3ldB5bR7Iwg65uvwHRTLtJtzTNQiUKxyUGeEKuGg8O8ehTANXI030L1oz5CNvmrYOTg9KHO-k6z2iBrYZkRnEX9_Vhbbc2nda5UU3tJfvc3xUZx8ulxxNPRO7_94_Nx17a7gROIJkJkjF9GLRV0wxCMuIEeqYH3O5hnFOeDFkn8BC4HILl05vBwfWC-QFx7sTSLaOw43ujF1ewpkj1_T8ONfSElBNZqgHpRdUBUwD5Bts',
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"adjuster resp details err")
    })
  }

  getSupervisorData(){
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${1}&PartnerOrganizationIds=${1}&OrganizationTypeIds=${1}&MemberName=${'sai'}&RoleIds=${26}&ItemsPerPage=10&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTgxMjQ5MzYsImV4cCI6MTY1ODE2MDkzNiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTgxMjQ5MzMsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiJCNDNFRkVCRkZBNkY4QjhCRjM2REM0QjIwMzU4QTgyRCIsInNpZCI6IjA2QjUxMDY1RTM0RUUyQkY4ODNFM0YxNkFCMjhEOTJBIiwiaWF0IjoxNjU4MTI0OTM2LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.w9Kw_5I5NUFuQVWo1mJdeeeIICWUBHjXXrQgxScwQBLikJ0aEF2fMRzoPPkeiHv51onDac9219fJZCT7zyh5oTVUPHXQjLROOBk76pzI-TaEITil5CWfpbymuoBgqSIwTTmUES7W9tek-uMfMW9jFvi3v8wxzpCQ11Oxp-TRMtnO8-6SAJNpscR7b3YKiSw3q8_nGnrgo0fiVWtfNbMA8dncXsq1ZhhQbwhKNttTlTYJI9Xt1SmegiNzxdiuRIONqudisV86JCNkCfKrqWsR8tNtaXaGvoigWIp9TGBu127hTREeqJXPTWfo1H9FagwbAm7tHcqe2A7nWIC7Xh4J-KuH_Y5y76B-XJnnwTuKP7s_hSvefQcGFASBMQI_eIcsdnhmtuZb-Ipcp-otNbGdJJSOWnEHDnysE8Xk4fENr-OGq3C0xbARcmejJewYtU3ldB5bR7Iwg65uvwHRTLtJtzTNQiUKxyUGeEKuGg8O8ehTANXI030L1oz5CNvmrYOTg9KHO-k6z2iBrYZkRnEX9_Vhbbc2nda5UU3tJfvc3xUZx8ulxxNPRO7_94_Nx17a7gROIJkJkjF9GLRV0wxCMuIEeqYH3O5hnFOeDFkn8BC4HILl05vBwfWC-QFx7sTSLaOw43ujF1ewpkj1_T8ONfSElBNZqgHpRdUBUwD5Bts',
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"supervisor resp details err")
    })
  }

  getHRData(){
    return axios.get(`https://apidevv2.yourdrs.com/v1/PartnerOrganization/Member?PartnerOrganizationMemberIds=${1}&PartnerOrganizationIds=${1}&OrganizationTypeIds=${1}&MemberName=${'sai'}&RoleIds=${25}&ItemsPerPage=10&Page=${1}`,{
      headers: {
        Authorization: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTgxMjQ5MzYsImV4cCI6MTY1ODE2MDkzNiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTgxMjQ5MzMsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiJCNDNFRkVCRkZBNkY4QjhCRjM2REM0QjIwMzU4QTgyRCIsInNpZCI6IjA2QjUxMDY1RTM0RUUyQkY4ODNFM0YxNkFCMjhEOTJBIiwiaWF0IjoxNjU4MTI0OTM2LCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.w9Kw_5I5NUFuQVWo1mJdeeeIICWUBHjXXrQgxScwQBLikJ0aEF2fMRzoPPkeiHv51onDac9219fJZCT7zyh5oTVUPHXQjLROOBk76pzI-TaEITil5CWfpbymuoBgqSIwTTmUES7W9tek-uMfMW9jFvi3v8wxzpCQ11Oxp-TRMtnO8-6SAJNpscR7b3YKiSw3q8_nGnrgo0fiVWtfNbMA8dncXsq1ZhhQbwhKNttTlTYJI9Xt1SmegiNzxdiuRIONqudisV86JCNkCfKrqWsR8tNtaXaGvoigWIp9TGBu127hTREeqJXPTWfo1H9FagwbAm7tHcqe2A7nWIC7Xh4J-KuH_Y5y76B-XJnnwTuKP7s_hSvefQcGFASBMQI_eIcsdnhmtuZb-Ipcp-otNbGdJJSOWnEHDnysE8Xk4fENr-OGq3C0xbARcmejJewYtU3ldB5bR7Iwg65uvwHRTLtJtzTNQiUKxyUGeEKuGg8O8ehTANXI030L1oz5CNvmrYOTg9KHO-k6z2iBrYZkRnEX9_Vhbbc2nda5UU3tJfvc3xUZx8ulxxNPRO7_94_Nx17a7gROIJkJkjF9GLRV0wxCMuIEeqYH3O5hnFOeDFkn8BC4HILl05vBwfWC-QFx7sTSLaOw43ujF1ewpkj1_T8ONfSElBNZqgHpRdUBUwD5Bts',
        "Access-Control-Allow-Origin": "*"
      }
     })
    .then((response)=>{
      return response.data
    }).catch((error)=>{
      console.log(error,"HR resp details err")
    })
  }
}

