import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ClientRequest } from '../../interface/ClientRequest';
import { ContractRequest } from '../../interface/ContractRequest';

@Component({
  selector: 'app-input-form-contract',
  templateUrl: './input-form-contract.component.html',
  styleUrl: './input-form-contract.component.css'
})
export class InputFormContractComponent implements OnInit {
  ContractForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

    metodosPago = [
      { label: 'Tarjeta de débito', value: '1' },
      { label: 'Tarjeta de crédito', value: '2' },
      { label: 'Efectivo', value: '3' }
    ];

    servicios = [
      { label: 'Basic', value: '1' },
      { label: 'Premiun', value: '2' },
      { label: 'Golden', value: '3' }
    ];



  onSubmitContractData() {

    const formValues = this.ContractForm.value;
    const consultRequest: ContractRequest = {
      startdate: formValues.FechaStard,
      enddate: formValues.FechaEnd,
      methodpaymentMethodpaymentid: formValues.MetodoPago,
      serviceServiceid: formValues.Servicio,
      clientIdentity: formValues.ClienteContrac
    };

    this.authService.InsertContractService(consultRequest).subscribe(
      response => {
        console.log(response);

        if (!response) {
          this.router.navigateByUrl('')
        }
      },
    );
  }

  ngOnInit(): void {
    this.ContractForm = this.formBuilder.group({
      FechaStards: new FormControl(new Date()),
      FechaEnd: ['', Validators.required],
      MetodoPago: ['', Validators.required],
      Servicio: ['', Validators.required],
      ClienteContrac: ['', [Validators.required, Validators.pattern('^[0-9]{10,13}$')]]
    });
  }
}
