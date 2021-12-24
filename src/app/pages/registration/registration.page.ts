import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public registerform: FormGroup;

  constructor(
    private formbuilder:FormBuilder,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.registerform = this.formbuilder.group({
      first_name:[null, Validators.compose([Validators.required])],
      last_name:[null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required,Validators.email])],
      password:[null, Validators.compose([Validators.required])],
    });
  }
  register(){
    this.utils.startloading();
    console.log(this.registerform.value)
    this.api.postData("auth/register",this.registerform.value).subscribe((res:any)=>{
      console.log(res);
      if(res.created===true){
        localStorage.setItem("uid",res.wpid);
        this.utils.dismisloading();
        this.utils.toast("Registration Successfull","success");
        this.nav.navigateForward("login")
      }else{
        this.utils.dismisloading();
        this.utils.toast("This email is already registered.Please try another email","danger");
      }
    
    })
  
  }
}
