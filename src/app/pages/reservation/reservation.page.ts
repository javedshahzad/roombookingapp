import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  buildingname: any;
  locationName: any;
  placeName: any;
  public reservationform:FormGroup;

  constructor(
    private formbuilder:FormBuilder,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) {
    this.buildingname=localStorage.getItem("buildingName")
    this.locationName=localStorage.getItem("locationName")
    this.placeName=localStorage.getItem("placeName")
   }

  ngOnInit() {
    this.reservationform = this.formbuilder.group({
      place:[null, Validators.compose([Validators.required])],
      to:[null, Validators.compose([Validators.required])],
      from:[null, Validators.compose([Validators.required])],
    });
    this.reservationform.controls['place'].setValue(localStorage.getItem("placeID"));

  }
createreservation(){
  this.utils.startloading();
  console.log(new Date(this.reservationform.value.from).getTime() / 1000)
  var from =new Date(this.reservationform.value.from).getTime() / 1000;
  var to = new Date(this.reservationform.value.to).getTime() / 1000;
  this.reservationform.controls['from'].setValue(from);
  this.reservationform.controls['to'].setValue(to);


  console.log(this.reservationform.value);
  console.log(this.reservationform.value);
  this.api.postDataWithToken("content/reservation",this.reservationform.value).subscribe((res:any)=>{
    console.log(res);
    if(res.id){
      this.utils.dismisloading();
      this.utils.toast("Booked reservation success","success");
      this.nav.navigateForward("allreservation")
    }else{
      this.utils.dismisloading();
      this.utils.toast("Error","danger");
    }
  })
}


getTimeStamp(input) {
  var parts = input.trim().split(' ');
  var date = parts[0].split('-');
var time = (parts[1] ? parts[1] : '00:00:00').split(':');

// NOTE:: Month: 0 = January - 11 = December.
var d = new Date(date[0],date[1]-1,date[2],time[0],time[1],time[2]);
return d.getTime() / 1000;
}
}
