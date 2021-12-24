import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  async toast(message, status){
    const  toast = await this.toastr.create({
  message:message,
  position:'top',
  color:status,
  duration:3000
  
  });
  toast.present();
  //end of toast
  }
  async startloading(){
    const loading= await this.loadingCtrl.create({
      message:"Please wait...",
      spinner:"bubbles",
      showBackdrop:true,
      duration:10000
    });
    loading.present();
  }
  async dismisloading(){
    return await this.loadingCtrl.dismiss();
    }
}
