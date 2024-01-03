import { Component, OnInit } from '@angular/core';
import { AppService } from './servises/app.service';
import { ModalController } from '@ionic/angular';
import { AuthModal } from './modal/auth/auth.modal';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  isWeb = AppService.isWeb();

  constructor(
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.showLoginModal()
  }

  async showLoginModal() {
    const modal = await this.modalCtrl.create({
      component: AuthModal,
      cssClass: 'full-modal'
    });
    modal.present();
  }
}
