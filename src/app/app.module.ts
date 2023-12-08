import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { AuthModal } from './modal/auth/auth.modal';
import { NewsModal } from './modal/news/news.modal';
import { OtpcodeModal } from './modal/otpcode/otpcode.page';
import { ProfilePage } from './page/profile/profile.page';

@NgModule({
  declarations: [AppComponent, HomePage, NewsModal, AuthModal, OtpcodeModal, ProfilePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
