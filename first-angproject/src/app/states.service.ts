import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
serviceTitle:string = "servicePage";
capitalApi:string='https://countriesnow.space/api/v0.1/countries/capital';
  constructor(private http:HttpClient) {

   }
getCapitalApi(){
  return this.http.get(this.capitalApi);
}
}
