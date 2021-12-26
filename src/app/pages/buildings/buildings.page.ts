import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.page.html',
  styleUrls: ['./buildings.page.scss'],
})
export class BuildingsPage implements OnInit {
  allbuildings: any=[];

  constructor(
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.getUser();
    this.getallBuildings();
    // this.getcompany();
    // this.getlocations();
    // this.getplaces();
  }
  getUser(){
    this.api.getDataWithToken("users/me").subscribe((res:any)=>{
      console.log(res);
    })
  }


  getallBuildings(){
    this.utils.startloading();
    this.api.getDataWithToken("content/building").subscribe((res:any)=>{
      console.log(res);
      this.utils.dismisloading();
      this.allbuildings=res;
      if(this.allbuildings.length == 0){
        //@ todo display in UI
        this.utils.toast("No building yet! Please add new building","danger")
      }
    })
  }


  getcompany(){
    this.api.getDataWithToken("content/company").subscribe((res:any)=>{
      console.log(res);
    })
  }
  getlocations(){
    this.api.getDataWithToken("content/location").subscribe((res:any)=>{
      console.log(res);
    })
  }
  getplaces(){
    this.api.getDataWithToken("content/place").subscribe((res:any)=>{
      console.log(res);
    })
  }
  delete(id){
     const data={
      "id": id,
    }
    console.log(data);
    this.api.deleteDataWithToken(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
  location(item){
    // @ todo remove this state
    localStorage.setItem("buildingID",item.id);
    localStorage.setItem("buildingName",item.name);
    this.nav.navigateForward("allocations");
  }
}
