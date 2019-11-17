import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { NavController } from '@ionic/angular';
import { Insomnia } from '@ionic-native/insomnia/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isOn: boolean = false;

  constructor(private flashlight: Flashlight, private insomnia: Insomnia, public navCtrl: NavController) { 

  }

  async isAvailable():Promise<boolean>{
    try {
      return await this.flashlight.available();
    }
    catch(e){
      console.log(e);
    }
  }

  async toggleFlash():Promise<void>{
    try {
      let available = await this.isAvailable();
      if(available){
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }
      else {
        console.log("Isn't Available");
      }
    }
    catch(e){
      console.log(e);
    }
  }

  /*this.insomnia.keepAwake()
  .then(
    () => console.log('success'),
    () => console.log('error')
  );

this.insomnia.allowSleepAgain()
  .then(
    () => console.log('success'),
    () => console.log('error')
  );*/
}