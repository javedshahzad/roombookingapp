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
    this.getuser();
    this.getallBuildings();
    // this.getcompany();
    // this.getlocations();
    // this.getplaces();
  }
  getuser(){
    this.api.getDataWithToken("users/me").subscribe((res:any)=>{
      console.log(res);
    })
  }


  getallBuildings(){
    this.utils.startloading();
    this.api.getDataWithToken("content/building?d=1").subscribe((res:any)=>{
      console.log(res);
      this.utils.dismisloading();
      this.allbuildings=res;
      if(this.allbuildings.length == 0){
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
    this.api.DeleteDataWithToken(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
  location(item){
    localStorage.setItem("buildingID",item.id);
    localStorage.setItem("buildingName",item.name);
    this.nav.navigateForward("allocations");
  }
}
