import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-joincompany',
  templateUrl: './joincompany.page.html',
  styleUrls: ['./joincompany.page.scss'],
})
export class JoincompanyPage implements OnInit {
  public joinform: FormGroup;
  constructor(
    private formbuilder:FormBuilder,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.joinform = this.formbuilder.group({
      secret:[null, Validators.compose([Validators.required])]
    });
    if(localStorage.getItem("secret") != undefined){
      this.joinform.controls['secret'].setValue(localStorage.getItem("secret"));
    }
  }
  join(){
    this.utils.startloading();
    console.log(this.joinform.value)
    this.api.PatchDataWithToken("content/company",this.joinform.value).subscribe((res:any)=>{
      console.log(res);
      if(res.id){
        localStorage.setItem("companyID",res.id);
        this.utils.dismisloading();
        this.utils.toast("Join Company successfully","success");
        localStorage.setItem("secret","");
        this.nav.navigateForward("buildings");
      }else{
        this.utils.dismisloading();
        this.utils.toast("Invalid or unknown company secret Code","danger");
      }
    })
  }
}
