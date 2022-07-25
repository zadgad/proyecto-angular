import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public busquedaReactiveForm: FormControl;

  constructor(private _router: Router) {
    this.busquedaReactiveForm = new FormControl('', [Validators.required, Validators.minLength(3)]);
  }

  public moverAEpisodios(): void {
    // Navegacion a traves de rutas en typescript
    this._router.navigate(['/episodes']);
  }

  public buscar(): void {
    if (this.busquedaReactiveForm.valid) {
      this.busquedaReactiveForm.reset();

      this._router.navigate(['busqueda/'], {
        queryParams: {
          name: this.busquedaReactiveForm.value
        },
        queryParamsHandling: 'merge'
      });
    }
  }

  public mostrarErrorFormulario(): string {
    if (this.busquedaReactiveForm.pristine || !this.busquedaReactiveForm.touched) return '';
    if (this.busquedaReactiveForm.errors) {
      if (this.busquedaReactiveForm.errors['required']) {
        return 'El campo de busqueda no debe ser vacio';
      } else if (this.busquedaReactiveForm.errors['minlength']) {
        return 'La busqueda debe tener al menos 3 caracteres';
      }
    }
    return '';
  }
}
