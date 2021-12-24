import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'All Buildings', url: '/buildings', icon: 'mail' },
    { title: 'Add/Join Company', url: '/company', icon: 'mail' },
    { title: 'Add Building', url: '/addbuilding', icon: 'paper-plane' },
    { title: 'All Locations', url: '/allocations', icon: 'heart' },
    { title: 'All Places', url: '/places', icon: 'archive' },
    { title: 'MY bookings', url: '/allreservation', icon: 'trash' },
    { title: 'Profile', url: '/profile', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private nav : NavController,
    private menu : MenuController
  ) {

    // if(localStorage.getItem("token")){
    //   this.nav.navigateForward("buildings")
    // }else{
    //   this.nav.navigateForward("login")
    // }
  }
  logout(){
    localStorage.clear();
    this.menu.close();
    this.nav.navigateForward("login");
  }
}