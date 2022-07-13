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
        Authorization: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTc2ODg5MzIsImV4cCI6MTY1NzcyNDkzMiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTc2ODg5MzEsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiI1QkJBNUY4REY4MDAzNjY3RjVCQjM2NTI4Mjc5ODk5QyIsInNpZCI6IjNFN0IyMDUyMDUzODc3QjNFOTY1QTREMDg0MEQ3QTIyIiwiaWF0IjoxNjU3Njg4OTMyLCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.gsDoibe2Yyob3oLbdOqueaCm_XouqTO2DSyKda7b3l0xq22Dgn_2cUK7FJQNzw1VYGg-BNB-rp2zTTEH_RWnlkNCrjsFD5xJxcg0IKSSOW3gveuNRHTeXYsrn9FwQeHDRj1OEf_r4bPY-INSAHdt_bsk4d1ouNgqq2KYjY4f5yNmb2x5bYuE3Ab2nJHnXAl7PUloJluDYb61mv8nFVARkjrsREBVHrSHS_NbzAzc1ALIK-8rYU4MrsTtlfIyLcEtQUs_EV9VpeQFBtd2MvM6fhpmSGUBBIIEUT2wBLlsW2J8gwLe7A9m4Edp9Ih9Iz8chZdUtsEh-iGFnhhZytLPu5ueQrl6wMz0y0EYCPjthLD543eMZtudjhzjzxkCXCKSM0Lfh7Hnt3Ob4Ha9xKZ8UGK9PL5UGXG1LkpsSbI1Yp41Xw-KBqifZeJ-88CGRPreOKp6qW9vrqai04_NcVcJpnljiTbwUl4W_2Bvm2luP343JuntdQP_bmifLpTiyxSTEVF1Hwz7gTvgKQTpK0zGlOToshavCmaqaVqAlv81G6Ki7IXutXUv1Qoi9Egc_Y4y-0MUQ5UyXIj1TxJhLeXQiuvaIVLy-FnF7VOv9tyVaueYtEHMdZMl01B9G46KiwBzDYo_C2IWB_58tTTUwHC66ZURQCi9z4rz20MMzCXMAYk',
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
        Authorization: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxRUYwQTlENTEzNzEyOTNBNjI1QTU5NUQzQUVGRDdEMDczMjBDODRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlFlOEtuVkUzRXBPbUphV1YwNjc5ZlFjeURJUSJ9.eyJuYmYiOjE2NTc2ODg5MzIsImV4cCI6MTY1NzcyNDkzMiwiaXNzIjoiaHR0cHM6Ly9pZHBkZXZ2Mi55b3VyZHJzLmNvbSIsImF1ZCI6WyJ5b3VyZHJzYXBpIiwieW91cmRyc2lkcGFwaSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyIiwic3ViIjoiMTMzMjEiLCJhdXRoX3RpbWUiOjE2NTc2ODg5MzEsImlkcCI6ImxvY2FsIiwicm9sZSI6IjEiLCJqdGkiOiI1QkJBNUY4REY4MDAzNjY3RjVCQjM2NTI4Mjc5ODk5QyIsInNpZCI6IjNFN0IyMDUyMDUzODc3QjNFOTY1QTREMDg0MEQ3QTIyIiwiaWF0IjoxNjU3Njg4OTMyLCJzY29wZSI6WyJ5b3VyZHJzYXBpc2NvcGUiLCJ5b3VyZHJzaWRwYXBpc2NvcGUiXSwiYW1yIjpbInB3ZCJdfQ.gsDoibe2Yyob3oLbdOqueaCm_XouqTO2DSyKda7b3l0xq22Dgn_2cUK7FJQNzw1VYGg-BNB-rp2zTTEH_RWnlkNCrjsFD5xJxcg0IKSSOW3gveuNRHTeXYsrn9FwQeHDRj1OEf_r4bPY-INSAHdt_bsk4d1ouNgqq2KYjY4f5yNmb2x5bYuE3Ab2nJHnXAl7PUloJluDYb61mv8nFVARkjrsREBVHrSHS_NbzAzc1ALIK-8rYU4MrsTtlfIyLcEtQUs_EV9VpeQFBtd2MvM6fhpmSGUBBIIEUT2wBLlsW2J8gwLe7A9m4Edp9Ih9Iz8chZdUtsEh-iGFnhhZytLPu5ueQrl6wMz0y0EYCPjthLD543eMZtudjhzjzxkCXCKSM0Lfh7Hnt3Ob4Ha9xKZ8UGK9PL5UGXG1LkpsSbI1Yp41Xw-KBqifZeJ-88CGRPreOKp6qW9vrqai04_NcVcJpnljiTbwUl4W_2Bvm2luP343JuntdQP_bmifLpTiyxSTEVF1Hwz7gTvgKQTpK0zGlOToshavCmaqaVqAlv81G6Ki7IXutXUv1Qoi9Egc_Y4y-0MUQ5UyXIj1TxJhLeXQiuvaIVLy-FnF7VOv9tyVaueYtEHMdZMl01B9G46KiwBzDYo_C2IWB_58tTTUwHC66ZURQCi9z4rz20MMzCXMAYk',
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
}
