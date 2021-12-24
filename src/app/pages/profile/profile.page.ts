import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public registerform: FormGroup;
  image: any;
  constructor(
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController,
    private formbuilder:FormBuilder,
  ) { }

  ngOnInit() {
 
    this.registerform = this.formbuilder.group({
      first_name:[null, Validators.compose([Validators.required])],
      last_name:[null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required,Validators.email])],
      position: [null, Validators.compose([Validators.required])],
    });
    this.getuser();
  }
  getuser(){
    this.utils.startloading()
    this.api.getDataWithToken("users/me").subscribe((res:any)=>{
      console.log(res);
      this.image=res.avatar
      this.registerform.controls['email'].setValue(res.email);
      this.registerform.controls['first_name'].setValue(res.first_name);
      this.registerform.controls['last_name'].setValue(res.last_name);
      this.registerform.controls['position'].setValue(res.position);
      this.utils.dismisloading();

    })
  }
  updateuser(){
    console.log(this.registerform.value);
    this.utils.startloading()
    this.api.postDataWithToken("users/me?",this.registerform.value).subscribe((res:any)=>{
      console.log(res)
      this.utils.dismisloading();
      this.utils.toast("Profile Updated success","success");

    })
  }
}
