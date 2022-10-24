import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { UserI } from '../../interfaces/user.interface';
import { LoadingController } from '@ionic/angular';
import { MsgService } from '../../../services/messages/msg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  public errorMessage: string = null;
  private user: UserI;

  constructor(
    private formBuilder: FormBuilder,
    private vs: ValidatorsService,
    private authsv: AuthenticationService,
    private loadingController: LoadingController,
    private msgsv: MsgService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({

      userEmail : new FormControl(null,Validators.compose([Validators.required, Validators.maxLength(50),Validators.minLength(3),
        Validators.pattern(this.vs.userEmailPattern) // Expresión Regular para validar el Email
      ])),

      userPassword : new FormControl(null, Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(20),
        Validators.pattern(this.vs.userPasswordPattern)
      ]))

    });
  }

  ngOnInit() {}


  validField(field: string){
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  async iniciarSesion(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    this.user = {
      username : this.loginForm.value.userEmail,
      password : this.loginForm.value.userPassword
    };


    const carga = await this.loadingController.create({
      message: 'Cargando ...'
    });

    await carga.present();

    // Enviar petición
    this.authsv.login(this.user).subscribe(
      (data) => {
        console.log(data);
        carga.dismiss();
        this.msgsv.createAlert(data.message,'','');
        if(data.user){
          // Navegamos a la página
          console.log('El usuario existe');
          this.router.navigate(['/cliente/']);
        }
      },
      (e) => {
        console.log(e);
        carga.dismiss();
        this.msgsv.createAlert(e.error.error,'','');
      }
    );

  }

  // Agrego métodos get para validar el Formulario
  get userEmail() { return this.loginForm.get('userEmail'); }
  get userPassword() { return this.loginForm.get('userPassword'); }

}

