import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  locationID: number = null;
  allplaces: any=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.locationID = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.getPlaces();
  }
  getPlaces(){
    this.utils.startloading();
    let queryParam = "";
    if (!!this.locationID){
      queryParam = "&location="+this.locationID;
    }
    this.api.getDataWithToken("content/place", queryParam).subscribe((res:any)=>{
      console.log(res);
      this.utils.dismisloading();
      this.allplaces=res;
    })
  }
}
