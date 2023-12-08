import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core'; 

@Injectable({providedIn: 'root'})
export class AppService {

  constructor(  ) {
  }

  static isWeb() {
    return Capacitor.getPlatform() === 'web';
  }

  static isMobile() {
    return !this.isWeb();
  }

  static isAppleOS() {
    return Capacitor.getPlatform() === 'ios';
  }

  static isAndroidOS() {
    return Capacitor.getPlatform() === 'android';
  }
}
