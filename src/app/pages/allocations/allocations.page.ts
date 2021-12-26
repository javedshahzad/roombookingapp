import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.page.html',
  styleUrls: ['./allocations.page.scss'],
})
export class AllocationsPage implements OnInit {
  buildingID: number = null;
  alllocation: any=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.buildingID = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.getlocations();
  }
  getlocations(){
    this.utils.startloading();
    let queryParam = "";
    if (!!this.buildingID){
      queryParam = "&building="+this.buildingID;
    }
    this.api.getDataWithToken("content/location", queryParam).subscribe((res:any)=>{
      this.utils.dismisloading();
      console.log(res);
      this.alllocation=res
    })
  }
}
