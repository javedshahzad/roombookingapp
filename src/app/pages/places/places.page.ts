import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  allplaces: any=[];

  constructor(
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.getplaces();
  }
  getplaces(){
    this.utils.startloading();
    this.api.getDataWithToken("content/place").subscribe((res:any)=>{
      console.log(res);
      this.utils.dismisloading();
      this.allplaces=res
    })
  }
  reservation(item){
    localStorage.setItem("placeID",item.id);
    localStorage.setItem("placeName",item.name);
    this.nav.navigateForward("reservation");
  }
}
