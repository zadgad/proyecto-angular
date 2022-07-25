import {Component} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public formulario: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.formulario = this._fb.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, this._validarContrasenia]),
        confirmPassword: new FormControl('', Validators.required)
      },
      {
        validators: [this._contraseniasIguales]
      }
    );
  }

  private _validarContrasenia(campo: FormControl): ValidationErrors | null {
    const valor = campo.value;

    const _mayusculas = (valor: string, cant: number): boolean => {
      for (let letra of valor) {
        if (letra >= 'A' && letra <= 'Z') {
          cant--;
        }
      }
      return cant <= 0;
    };

    const _caracteresEspeciales = (valor: string, cant: number): boolean => {
      for (let letra of valor) {
        if (letra !== undefined && !_esLetra(letra) && !_esNumero(letra)) {
          cant--;
        }
      }
      return cant <= 0;
    };

    const _esLetra = (letra: string): boolean => {
      return (letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z');
    };

    const _esNumero = (letra: string): boolean => {
      return letra >= '0' && letra <= '9';
    };

    if (valor.length > 5) {
      if (_caracteresEspeciales(valor, 3)) {
        if (_mayusculas(valor, 3)) {
          return null;
        } else {
          return {
            incumpleMayusculas: true
          };
        }
      } else {
        return {
          incumpleCaracteresEspeciales: true
        };
      }
    } else {
      return {
        incumpleLongitud: true
      };
    }
  }

  private _contraseniasIguales(form: AbstractControl): ValidationErrors | null {
    const valor1: string = form.get('password')?.value;
    const valor2: string = form.get('confirmPassword')?.value;

    if (valor1 !== valor2) {
      return {
        contraseniasDiferentes: true
      };
    }
    return null;
  }
}
