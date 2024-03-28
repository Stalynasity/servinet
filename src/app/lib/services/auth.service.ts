import { LoginComponent } from './../auth/login/login.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroments';
import { LoginResponse, Usuario } from '../interface/auth.interface';
import { Observable, catchError, map, throwError, of, tap } from 'rxjs';
import { LoginRequest } from '../interface/LoginRequest.interface';

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


  get usuario(){
    return {...this._usuario}
  }
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<any> {
    const url = `${this.BASE_URL}/Login`;
    return this.http.post<LoginResponse>(url, loginRequest).pipe(
      tap(resp => {
        if(resp.data?.userName){
          this._usuaripublic = resp.data.userName
        }
      }),
      map(resp => resp.message),
      catchError(error => {
        // Puedes manejar el error aquí si es necesario
        console.error('Error en la solicitud de inicio de sesión:', error);
        return of(null); // Devuelve un observable con un valor nulo en caso de error
      })
    );
  }
}
