import { Injectable } from '@angular/core';
import {
  Loading,
  AlertController,
  LoadingController,
  ToastController,
  Events
} from "ionic-angular";

@Injectable()
export class UtilsProvider {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
  }

  // Esta es una version mas rapida del "_.find" de lodash :3
  // Gracias a https://pouchdb.com/2015/02/28/efficiently-managing-ui-state-in-pouchdb.html
  public binarySearch(arr: any, property: string, search: any): number {
    let low: number = 0;
    let high:number = arr.length;
    let mid:number;
    while (low < high) {
      mid = (low + high) >>> 1; // faster version of Math.floor((low + high) / 2)
      arr[mid][property] < search ? low = mid + 1 : high = mid
    }
    return low;
  }

  public showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Espere por favor...'
    });
    loading.present();
    return loading;
  }

  public showToast(msg:string): void {
    this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      showCloseButton: false,
      closeButtonText: "cerrar"
    }).present();
  }

}
