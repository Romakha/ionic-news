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
