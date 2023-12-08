import { Component } from '@angular/core';
import { AppService } from './servises/app.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isWeb = AppService.isWeb();

  constructor(
    private appService: AppService,
  ) {}
}
