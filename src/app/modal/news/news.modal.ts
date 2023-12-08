import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.modal.html',
  styleUrls: ['./news.modal.scss'],
})
export class NewsModal {

  showModal = false;

  constructor() { }

  hiddenShowBurgerMenu() {
    this.showModal = !this.showModal;
  }
}
