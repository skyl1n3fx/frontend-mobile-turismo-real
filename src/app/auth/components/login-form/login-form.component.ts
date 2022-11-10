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
  public showPassword : Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private vs: ValidatorsService,
    private authsv: AuthenticationService,
    private loadingController: LoadingController,
    private msgsv: MsgService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({

      userEmail : new FormControl('recepcionista1@gmail.com',Validators.compose([Validators.required, Validators.maxLength(50),Validators.minLength(3),
        Validators.pattern(this.vs.userEmailPattern) // Expresión Regular para validar el Email
      ])),

      userPassword : new FormControl('Recepcionista123!', Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(20),
        Validators.pattern(this.vs.userPasswordPattern)
      ]))

    });
  }

  ngOnInit() {
  }

  onShowPassword(){
    this.showPassword = !this.showPassword;
  }

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
          if(data.user.position.id === 3){
            this.router.navigate(['/recepcionista/']);
          }else if(data.user.position.id === 4){
            this.router.navigate(['/conductor/']);
          }
        }
      },
      (e) => {
        if(e.error.error){
          carga.dismiss();
          this.msgsv.createAlert(e.error.error,'','');
          return
        }
        carga.dismiss();
        this.msgsv.createAlert('¡Oops!, ¡Lo Sentimos!','El servicio no se encuentra disponible =(.','');
      }
    );

  }

  // Agrego métodos get para validar el Formulario
  get userEmail() { return this.loginForm.get('userEmail'); }
  get userPassword() { return this.loginForm.get('userPassword'); }

}

