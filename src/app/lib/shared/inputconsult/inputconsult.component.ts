import { Component, OnInit } from '@angular/core';
import { ConsContract, ConsPagos, ConsultReq, ConsultReqContract } from '../../interface/Consulta.interface';
import { ConsultService } from '../../services/consult.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputconsult',
  templateUrl: './inputconsult.component.html',
  styleUrl: './inputconsult.component.css'
})
export class InputconsultComponent implements OnInit {
  ConsulForm!: FormGroup;
  resultados!: ConsPagos;
  ConsulFormContract!: FormGroup;
ResultadoContract!: ConsContract;

  constructor(private formBuilder: FormBuilder, private consultService: ConsultService) { }

  ngOnInit(): void {
    this.ConsulForm = this.formBuilder.group({
      identification: ['', [Validators.required, Validators.pattern('^[0-9]{10,}$')]],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required]
    });

    this.ConsulFormContract = this.formBuilder.group({
      identificationContract: ['', [Validators.required, Validators.pattern('^[0-9]{10,}$')]]
    });
  }

  pagosList: ConsPagos[] = [];
  noRecordsFound: boolean = false;

  realizarConsulta() {
    const formValues = this.ConsulForm.value;
    const consultRequest: ConsultReq = {
      identification: formValues.identification,
      startdate: formValues.startdate,
      enddate: formValues.enddate
    };
    this.consultService.consult(consultRequest)
      .subscribe(
        (response: ConsPagos[]) => {
          console.log(response)
          this.noRecordsFound = this.pagosList.length === 0;
          this.pagosList = response;
        },
        (error) => {
          console.error('Error al consultar contrato:', error);
        }
      );
  }

  pagosListContract: ConsContract[] = [];

  realizarConsultaContract() {
    const formValues = this.ConsulFormContract.value;
    const consultRequestContra: ConsultReqContract = {
      identification: formValues.identificationContract

    };
    this.consultService.consultContract(consultRequestContra)
      .subscribe(
        (response: ConsContract[]) => {
          console.log(response);
          this.pagosListContract = response;
        },
        (error) => {
          console.error('Error al consultar pagos:', error);
        }
      );
  }
}
