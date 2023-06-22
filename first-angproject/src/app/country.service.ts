import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  booksApi:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  countriesDataList=[
    {
      sno:1,
      countryName:"India"
    },
    {
      sno:2,
      countryName:"America"
    },
    {
      sno:3,
      countryName:"United Kingdom"
    },
    {
      sno:4,
      countryName:"Canada"
    },
    {
      sno:5,
      countryName:"Australia"
    }
  ]
  countryList=
  ["India","USA","UK","Russia","Canada","Australia","Italy","Japan",
  "Iran","Iraq","Pakisthan","Newzealand","Sri Lanka","China","Nepal"];
  getBooksApi(){
    return this.http.get(this.booksApi);
  }
}
