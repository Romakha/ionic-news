import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OtpcodeModal } from '../otpcode/otpcode.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.modal.html',
  styleUrls: ['./auth.modal.scss'],
})
export class AuthModal implements OnInit {

  register = false;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async sendOtpCode() {
    const modal = await this.modalCtrl.create({
      component: OtpcodeModal,
      cssClass: 'otp-modal'
    });
    await modal.present();
    const modalRes = await modal.onWillDismiss();
    console.log(modalRes)
    if (modalRes.data == 'ok') {
      this.modalDismiss();
    }
  }



  async modalDismiss() {
    await this.router.navigateByUrl('main');
    await this.modalCtrl.dismiss();

  }
}

/*
async signInWithGoogle(): Promise<string | undefined> {
  const user = await GoogleAuth.signIn();
  return firstValueFrom(this.authResource.signInWithGoogle({
    identityToken: user.authentication.idToken,
    mobile: AppService.isMobile(),
  })).then(res => res.success ? res.token : undefined);
}

async signInWithApple(): Promise<string | undefined> {
  const {nonce} = await this.getAppleNonce();
  const token = (await SignInWithApple.authorize({
    clientId: 'com.happycake.store.signin',
    redirectURI: 'https://happycake.kz/login',
    scopes: 'email name',
    state: 'hc_app',
    nonce: nonce,
  })).response.identityToken;

  return firstValueFrom(this.authResource.signInWithApple({
    identityToken: token,
    mobile: AppService.isMobile(),
  })).then(res => res.success ? nonce : undefined);
}

private async onAuthSuccess() {
  if (AppService.isMobile()) {
    if (!this.token) {
      throw new Error('[auth] Token is undefined');
    }
    await this.auth.saveToken(this.token);
  }
  const authUser = await this.auth.getMe();
  this.auth.userUpdated(authUser);
  if (this.auth.postUrl) {
    await this.router.navigateByUrl(this.auth.postUrl);
    this.auth.postUrl = undefined;
  } else {
    const city = await this.storageService.getCity();
    if (city) {
      await this.router.navigateByUrl(AppService.isMobile() ? '/main' : ('/' + city.slug));
    } else {
      await this.router.navigateByUrl('/cities');
    }
  }
}

  async signInWithApple() {
    try {
      this.appService.showLoader();
      const token = await this.auth.signInWithApple();
      if (token) {
        this.token = token;
        await this.onAuthSuccess();
      }
    } catch (err: any) {
      console.error('failed to sign in', err);
    } finally {
      this.appService.hideLoader();
    }
  }

  async signInWithGoogle() {
    this.loading.google = true;
    try {
      this.appService.showLoader();
      const token = await this.auth.signInWithGoogle();
      if (token) {
        this.token = token;
        await this.onAuthSuccess();
      }
    } catch (err: any) {
      console.error('failed to sign in', err);
    } finally {
      this.loading.google = false;
      this.appService.hideLoader();
    }
  }*/