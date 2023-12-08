import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsModal } from '../modal/news/news.modal';
import { AuthModal } from '../modal/auth/auth.modal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showModal = false;

  constructor(
    private modalCtrl: ModalController,
  ) {}

  async showNewsModal() {
    const modal = await this.modalCtrl.create({
      component: AuthModal,
      cssClass: 'full-modal'
    });
    modal.present();
  }

  hiddenShowBurgerMenu() {
    this.showModal = !this.showModal;
  }
}
