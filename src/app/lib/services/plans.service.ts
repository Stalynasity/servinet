import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../../enviroments/enviroments';
import { ListPlanes } from '../interface/plane.interface';
@Injectable({
  providedIn: 'root'
})
export class HttpPLanesService {

  private BASE_URL: string = enviroment.API;

  constructor( private http: HttpClient) {}

  readProducts(): Observable<ListPlanes[]>{
    return this.http.get<ListPlanes[]>(this.BASE_URL+"/Plan");
  }

  // maintenanceProduct(product: ProductoDetail): Observable<ProductoDetail>{
  //   return this.http.post<ProductoDetail>(this.BASE_URL+"/maintenanceproduct", product);
  // }
}
