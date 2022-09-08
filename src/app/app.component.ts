import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // Animación de transición global de la APP
  myCustomPageTransition = ((baseEl: any, opts ?: any) => {
    console.log("opts.enteringE1:" + opts.enteringEl) ; // Entering Element - New Page
    console.log("opts.leavingE1:" + opts.leavingE1); // Leaving Element I Current Page

    var anim1 = this.animationCtrl.create()
    .addElement(opts.leavingE1)
    .duration(1000)
    .iterations(1)
    .easing('ease-out')
    .fromTo('opacity' , '1', '0.0')
    
    var anim2 = this.animationCtrl.create()
    .addElement(opts.enteringEl)
    .duration(1000)
    .iterations(1)
    .easing('ease-out')
    .fromTo('opacity' , '0.0', '1')

    var anim2 = this.animationCtrl.create()
    .duration(1000)
    .iterations(1)
    .addAnimation([anim1,anim2]);
    return anim2;
  });

  constructor(
    private animationCtrl : AnimationController
  ) {}
}
