import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-otpcode',
  templateUrl: './otpcode.page.html',
  styleUrls: ['./otpcode.page.scss'],
})
export class OtpcodeModal implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async modalDismiss() {
    await this.router.navigateByUrl('main');
    this.modalCtrl.dismiss('ok');
  }
}