import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  inputArray:Object[]=[]
  private url = 'https://625108bd-a4f1-4237-9f53-df4ec9fdc91d.mock.pstmn.io/getCompanies';

  constructor(private httpClient: HttpClient) { }

  getInsuranceData(){
    return this.httpClient.get(this.url);
  }

  // getInsuranceData(){
  //   axios.get('https://625108bd-a4f1-4237-9f53-df4ec9fdc91d.mock.pstmn.io/getCompanies')
  //    .then((response) => {
  //       console.log(response.data,"response from post api in services");
  //       this.inputArray.push(response.data)
  //       return response.data
  // });
  // }

  
}
