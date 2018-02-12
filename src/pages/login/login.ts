import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";

//Providers
import { UtilsProvider } from '../../providers/utils/utils';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm: FormGroup;
  private username: string;
  private password: string;

  private backgroundImage = 'assets/img/background/background-5.jpg';

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private fb: FormBuilder,
    private navParams: NavParams,
    private util: UtilsProvider
  ) {
    this.menuCtrl.enable(false);
  }

  //Runs when the page is about to enter and become the active page.
  ionViewWillLoad() {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      codigo: ['', Validators.required]
    });
  }

  private login(): void {
    //let loading = this.util.showLoading();
    let formModel = JSON.parse(JSON.stringify(this.loginForm.value));
    let credentials = {
      codigo: formModel.codigo
    };
    this.navCtrl.setRoot('TabsPage');
    //loading.dismiss();

  }

}
