import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.page.html',
  styleUrls: ['./allocations.page.scss'],
})
export class AllocationsPage implements OnInit {
  alllocation: any=[];

  constructor(
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this. getlocations();
  }
  getlocations(){
    this.utils.startloading();
    this.api.getDataWithToken("content/location").subscribe((res:any)=>{
      this.utils.dismisloading();
      console.log(res);
      this.alllocation=res
    })
  }
  places(item){
    localStorage.setItem("LocationID",item.id);
    localStorage.setItem("locationName",item.name);
    this.nav.navigateForward("places");

  }
}
