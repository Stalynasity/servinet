
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroments';
import { LoginResponse, Usuario } from '../interface/auth.interface';
import { Observable, catchError, map, throwError, of, tap } from 'rxjs';
import { LoginRequest } from '../interface/LoginRequest.interface';
import { ClientRequest, PostClient } from '../interface/ClientRequest';
import { ContractRequest } from '../interface/ContractRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL = enviroment.API;

  private _usuario!: Usuario;

  public _usuaripublic!: string;

  get usuarioMenu(): string | null {
    return this._usuaripublic;
  }

  get usuario() {
    return { ...this._usuario }
  }
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<any> {
    const url = `${this.BASE_URL}/Login`;
    return this.http.post<LoginResponse>(url, loginRequest).pipe(
      tap(resp => {
        if (resp.data?.token) {
          localStorage.setItem('token', resp.data.token);
        }
        if (resp.data?.userName) {
          this._usuaripublic = resp.data.userName
        }
      }),

      map(resp => resp.message),
      catchError(error => {
        console.error('Error en la solicitud de inicio de sesión:', error);
        return of(null);
      })
    );
  }


  InsertCLientService(clientReq: ClientRequest): Observable<boolean> {
    const url = `${this.BASE_URL}/Client/registro`;
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '')

      return this.http.post<boolean>(url, clientReq, { headers: headers });
  }

  InsertContractService(contractReq: ContractRequest): Observable<boolean>{
    const url = `${this.BASE_URL}/Client/Contracto`;
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '')

      return this.http.post<boolean>(url, contractReq, { headers: headers });
  }


}
