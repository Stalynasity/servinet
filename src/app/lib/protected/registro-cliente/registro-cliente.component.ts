import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css'
})
export class RegistroClienteComponent {

  FormCliente: FormGroup | null = null;

  ngOnInit() {
    this.FormCliente = this.fb.group({
      Nombre: ['', [Validators.required, Validators.email]],
      Apellido: ['', [Validators.required, Validators.minLength(8)]],
      Cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^[0-9]+$')]],
      Telefono: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
      Direccion: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      Referencia: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
    });
  }

    constructor(private fb:FormBuilder) { }

    login(){

    }

    // Función de validación personalizada para verificar si la identificación es solo números
  soloNumeros(control: AbstractControl): { [key: string]: boolean } | null {
    const cedula = control.value;
    if (!cedula.match(/^[0-9]+$/)) {
      return { soloNumeros: true };
    }
    return null;
  }

  // Función de validación personalizada para verificar la longitud de la identificación
  longitudIdentificacion(control: AbstractControl): { [key: string]: boolean } | null {
    const cedula = control.value;
    if (cedula.length < 10 || cedula.length > 13) {
      return { longitudInvalida: true };
    }
    return null;
  }

}
