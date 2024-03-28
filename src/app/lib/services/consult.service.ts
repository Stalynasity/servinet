import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPlanes } from '../interface/plane.interface';
import { enviroment } from '../../../enviroments/enviroments';
import { Observable } from 'rxjs';
import { ConsContract, ConsPagos, ConsultReq, ConsultReqContract } from '../interface/Consulta.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  private BASE_URL: string = enviroment.API;

  constructor( private http: HttpClient) {}


  consult(consulta: ConsultReq): Observable<ConsPagos[]>{
    const url = `${this.BASE_URL}/Plan/consultar-pagos`;
    return this.http.post<ConsPagos[]>(url, consulta);
  }

  consultContract(consultaContact: ConsultReqContract): Observable<ConsContract[]>{
    const url = `${this.BASE_URL}/Plan/consultar-contratos`;
    return this.http.post<ConsContract[]>(url, consultaContact);
  }



}
