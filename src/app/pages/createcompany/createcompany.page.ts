import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.page.html',
  styleUrls: ['./createcompany.page.scss'],
})
export class CreatecompanyPage implements OnInit {
  showcompany:boolean=true;
  public createcompanyform: FormGroup;
  comany_secret: any;
  show_secret:boolean=false;


  constructor(
    private formbuilder:FormBuilder,
    private api : ApiService,
    private utils:UtilService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.createcompanyform = this.formbuilder.group({
      name:[null, Validators.compose([Validators.required])],
    });
  }
  create(){
    console.log(this.createcompanyform.value);
    this.utils.startloading();
    this.api.postDataWithToken("content/company",this.createcompanyform.value).subscribe((res:any)=>{
      console.log(res);
      if(res.id){
        localStorage.setItem("companyID",res.id);
        this.comany_secret=res.company_secret;
        this.utils.dismisloading();
        this.utils.toast("Company created successfully","success");
        this.showcompany=false;
        this.show_secret=true;
      }
    })
  }
  join(){
    localStorage.setItem("secret",this.comany_secret);
    this.nav.navigateForward("joincompany");
  }
}
