import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.modal.html',
  styleUrls: ['./news.modal.scss'],
})
export class NewsModal {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  modalDismiss() {
    this.modalCtrl.dismiss();
  }
}
