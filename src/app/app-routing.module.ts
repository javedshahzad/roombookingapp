import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buildings',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'createcompany',
    loadChildren: () => import('./pages/createcompany/createcompany.module').then( m => m.CreatecompanyPageModule)
  },
  {
    path: 'joincompany',
    loadChildren: () => import('./pages/joincompany/joincompany.module').then( m => m.JoincompanyPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/buildings/buildings.module').then( m => m.BuildingsPageModule)
  },
  {
    path: 'addbuilding',
    loadChildren: () => import('./pages/addbuilding/addbuilding.module').then( m => m.AddbuildingPageModule)
  },
  {
    path: 'addlocation',
    loadChildren: () => import('./pages/addlocation/addlocation.module').then( m => m.AddlocationPageModule)
  },
  {
    path: 'building/:id',
    loadChildren: () => import('./pages/allocations/allocations.module').then( m => m.AllocationsPageModule)
  },
  {
    path: 'location/:id',
    loadChildren: () => import('./pages/places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'place/:id',
    loadChildren: () => import('./pages/allreservation/allreservation.module').then( m => m.AllreservationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
