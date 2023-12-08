import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OtpcodeModal } from '../otpcode/otpcode.page';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.modal.html',
  styleUrls: ['./auth.modal.scss'],
})
export class AuthModal implements OnInit {

  register = false;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async sendOtpCode() {
    const modal = await this.modalCtrl.create({
      component: OtpcodeModal,
      cssClass: 'otp-modal'
    });
    modal.present();
  }

  modalDismiss() {
    this.modalCtrl.dismiss();
  }
}
