import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginform: FormGroup;


  constructor(
    private formbuilder:FormBuilder,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      email: [null, Validators.compose([Validators.required,Validators.email])],
      password:[null, Validators.compose([Validators.required])],
    });
  }
  login(){
    this.utils.startloading();
    console.log(this.loginform.value)
    this.api.postData("auth/login",this.loginform.value).subscribe((res:any)=>{
      console.log(res);

      if(res.token){
        this.utils.dismisloading();
        this.utils.toast("Login Successfull","success");
        localStorage.setItem("token",res.token);
        this.nav.navigateForward("company")
      }else{
        this.utils.dismisloading();
        this.utils.toast("Error accurred! Please check you details","danger");
      }
    
    })
  
  }
}
