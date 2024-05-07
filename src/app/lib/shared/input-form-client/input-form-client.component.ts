import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ClientRequest } from '../../interface/ClientRequest';

@Component({
  selector: 'app-input-form-client',
  templateUrl: './input-form-client.component.html',
  styleUrl: './input-form-client.component.css'
})
export class InputFormClientComponent implements OnInit {

  @Output() evento = new EventEmitter<boolean>();

  cambioRegistro() {
    this.evento.emit(false);
  }


  ClientForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }



  onSubmitClientData() {

    const formValues = this.ClientForm.value;
    const consultRequest: ClientRequest = {
      clientname: formValues.Nombre,
      lastname: formValues.Apellido,
      identification: formValues.Identificación,
      phonenumber: formValues.Teléfono,
      address: formValues.Dirección,
      referenceaddress: formValues.RefDireccion
    };

    this.authService.InsertCLientService(consultRequest).subscribe(
      response => {
        if (response) {
          console.log(response);
        this.cambioRegistro()
        }
      },
      error => {
        if (error.error.includes("Ya existe un cliente con el mismo número de identificación.")) {
          alert("Ya existe un cliente con el mismo número de identificación.");
        }
      }
    );
  }


  onSubmitPaymentData() {

  }

  ngOnInit(): void {
    this.ClientForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Identificación: ['', [Validators.required, Validators.pattern('^[0-9]{10,13}$')]],
      Teléfono: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
      Dirección: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      RefDireccion: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]]
    });
  }
}
