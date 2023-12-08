import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { ProfilePage } from './page/profile/profile.page';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomePage},
      {path: 'profile', component: ProfilePage},

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
