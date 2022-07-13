import { Component } from '@angular/core';
import { MasterService } from './master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yourDocAngular';
  //masterData:any=[]
  constructor(private service:MasterService) { 
  }

  ngOnInit(): void {
    this.service.getMasterData().then(resp=>{
      //this.masterData=resp
      window.localStorage['masterData'] = JSON.stringify(resp)
      //console.log(resp,"initial master data")
    })
    //console.log(JSON.parse(window.localStorage['masterData']),"master data from local")
  }
}
