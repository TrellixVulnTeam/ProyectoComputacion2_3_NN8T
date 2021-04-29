import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost/ProyectoComputacion2_3/public/api/";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(extension:string){
    return this.httpClient.get(this.REST_API_SERVER + extension);
  }
}
