
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroments';
import { LoginData, LoginResponse, Usuario } from '../interface/auth.interface';
import { Observable, catchError, map, throwError, of, tap, BehaviorSubject } from 'rxjs';
import { LoginRequest } from '../interface/LoginRequest.interface';
import { ClientRequest, PostClient } from '../interface/ClientRequest';
import { ContractRequest } from '../interface/ContractRequest';
import { UserReques } from '../interface/UsuarioRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL = enviroment.API;

  private _usuarioPublico: string | null = null;
  private _rolIdSubject: BehaviorSubject<number | null>;

  get usuarioMenu(): string | null {
    return this._usuarioPublico;
  }
  get userRole$(): Observable<number | null> {
    return this._rolIdSubject.asObservable();
  }

  constructor(private http: HttpClient) {
    // Recuperar el rolId del localStorage al inicializar el servicio
    const storedRolId = localStorage.getItem('rolId');
    this._rolIdSubject = new BehaviorSubject<number | null>(storedRolId ? +storedRolId : null);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse<LoginData>> {
    const url = `${this.BASE_URL}/Login`;
    return this.http.post<LoginResponse<LoginData>>(url, loginRequest).pipe(
      tap(resp => {
        if (resp.data?.token) {
          localStorage.setItem('token', resp.data.token);
        }
        if (resp.data?.rolId) {
          localStorage.setItem('rolId', resp.data.rolId.toString())
          this._rolIdSubject.next(resp.data.rolId); // Emitir el rolId a los observadores
        }
      }),
    );
  }

  isLogginIn(){
    const token = localStorage.getItem('token');
    return token !== null && token.trim() !== '';
  }

  logout(): void {
    // Limpiar datos de localStorage al cerrar sesión
    localStorage.removeItem('token');
    localStorage.removeItem('rolId');
    this._rolIdSubject.next(null); // Emitir null a los observadores
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

  InsertUsuarioService(UsuaReq: UserReques): Observable<boolean> {
    const url = `${this.BASE_URL}/Users/registro`;
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '')
      return this.http.post<boolean>(url, UsuaReq, { headers: headers });
  }
}
