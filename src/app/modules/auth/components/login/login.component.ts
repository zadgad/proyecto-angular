import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public formulario: FormGroup;
  constructor(private _api: AuthService, private _router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  public enviarFormulario(): void {
    // console.log(this.formulario.value);
    const email = this.formulario.get('email')?.value;
    const password = this.formulario.get('password')?.value;
    this._api.login(email, password).subscribe({
      next: respuesta => {
        localStorage.setItem('RickAndMortyToken', respuesta.token);
        this._router.navigate(['/characters']);
      }
    });
  }
}
