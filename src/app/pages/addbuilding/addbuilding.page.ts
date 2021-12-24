import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-addbuilding',
  templateUrl: './addbuilding.page.html',
  styleUrls: ['./addbuilding.page.scss'],
})
export class AddbuildingPage implements OnInit {
  public addbuildingform: FormGroup;
  public locationform: FormGroup;
  public placeform: FormGroup;
  public reservationform: FormGroup;
  showcreateBuilding:boolean=true;
  showlocation:boolean=false;
  showplace:boolean=false;
  headertxt="Create New Building";
  buildingID: any;
  locationID: any;
  placeID: any;
  now: any;
  nndate: any;

  constructor(
    private formbuilder:FormBuilder,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { 
    var today3 = new Date();
    var date = today3.getFullYear()+'-'+(today3.getMonth()+1)+'-'+today3.getDate();
    var time = today3.getHours() + ":" + today3.getMinutes() + ":" + today3.getSeconds();
    var dateTime = date+' '+time;
    console.log(dateTime);

  
  }

  ngOnInit() {
    this.addbuildingform = this.formbuilder.group({
      name:[null, Validators.compose([Validators.required])]
    });

    this.locationform = this.formbuilder.group({
      name:[null, Validators.compose([Validators.required])],
      building:[null, Validators.compose([Validators.required])]
    });

    this.placeform = this.formbuilder.group({
      name:[null, Validators.compose([Validators.required])],
      location:[null, Validators.compose([Validators.required])],
    });
    this.reservationform = this.formbuilder.group({
      place:[null, Validators.compose([Validators.required])],
      to:[null, Validators.compose([Validators.required])],
      from:[null, Validators.compose([Validators.required])],
     
     
    });

  }

  getTimeStamp(input) {
    var parts = input.trim().split(' ');
    var date = parts[0].split('-');
	var time = (parts[1] ? parts[1] : '00:00:00').split(':');

	// NOTE:: Month: 0 = January - 11 = December.
	var d = new Date(date[0],date[1]-1,date[2],time[0],time[1],time[2]);
	return d.getTime() / 1000;
}


  createbuilding(){
    this.utils.startloading()
    console.log(this.addbuildingform.value);
    this.api.postDataWithToken("content/building",this.addbuildingform.value).subscribe((res:any)=>{
      console.log(res);
      if(res.id){
        this.utils.dismisloading();
        this.utils.toast("Building created successfully","success"); 
        localStorage.setItem("buildingID",res.id);
        this.buildingID=res.id;
        localStorage.setItem("buildingName",res.name);
        this.locationform.controls['building'].setValue(this.buildingID);
        this.showcreateBuilding=false;
        this.showlocation=true;
        this.headertxt="Create new Location";
      }else{
        this.utils.dismisloading();
        this.utils.toast("Error accured!","danger"); 
      }
    })
  }
  createLocation(){
    console.log(this.locationform.value);
    this.utils.startloading()
    this.api.postDataWithToken("content/location",this.locationform.value).subscribe((res:any)=>{
      console.log(res);
      if(res.id){
        this.utils.dismisloading();
        this.utils.toast("Location created successfully","success");
        localStorage.setItem("locationName",res.name);
        localStorage.setItem("LocationID",res.id);
        this.locationID=res.id;
        this.placeform.controls['location'].setValue(this.locationID);
        this.showcreateBuilding=false;
        this.showlocation=false;
        this.showplace=true;
        this.headertxt="Create New Place";
      }else{
        this.utils.dismisloading();
        this.utils.toast(res.error,"danger"); 
        //for example
      }

    })
  }
  createplace(){
    
    console.log(this.placeform.value);
    this.utils.startloading()
    this.api.postDataWithToken("content/place",this.placeform.value).subscribe((res:any)=>{
      console.log(res);
      if(res.id){
        this.utils.dismisloading();
        this.utils.toast("Location created successfully","success"); 
        localStorage.setItem("placeID",res.id);
        this.placeID=res.id;
        localStorage.setItem("placeName",res.name);
        this.nav.navigateForward("reservation")
        // this.reservationform.controls['place'].setValue(this.placeID);
        // this.reservationform.controls['from'].setValue(from);//lesser
      }else{
        this.utils.dismisloading();
        this.utils.toast(res.error,"danger"); 
        //for example
      }

    })
  }
  createreservation(){
      console.log(this.reservationform.value);
    this.api.postDataWithToken("content/reservation",this.reservationform.value).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
