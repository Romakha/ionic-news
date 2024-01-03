import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsModal } from 'src/app/modal/news/news.modal';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  
  showModal = false;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async showNewsModal() {
    const modal = await this.modalCtrl.create({
      component: NewsModal,
      cssClass: 'full-modal'
    });
    modal.present();
  }

  hiddenShowBurgerMenu() {
    this.showModal = !this.showModal;
  }
}
