import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-allreservation',
  templateUrl: './allreservation.page.html',
  styleUrls: ['./allreservation.page.scss'],
})
export class AllreservationPage implements OnInit {
  allreservation: any=[];

  constructor(
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.getallreservation();
    this.getallplace();
  }
  getallreservation(){
    this.utils.startloading();
    this.api.getDataWithToken("content/reservation").subscribe((res:any)=>{
      console.log(res);
      this.utils.dismisloading();
      this.allreservation=res;
    })
  }
  getallplace(){
    this.api.getDataWithToken("https://office-api.amicaldo.net/wp-json/api/v1/content/place?location=272").subscribe((res:any)=>{
    console.log(res);
    //var combinedArray = array1.concat(array2);
    })
  }
}
