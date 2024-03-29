import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  profileImage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if (this.profileImage == null) {
      this.profileImage = 'assets/imgs/avatar-blank.png';
    }
  }
}
