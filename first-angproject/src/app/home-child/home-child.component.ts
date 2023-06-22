import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {
  getCountriesDataList:any;
  getCountryDataListArray:any;
  @Input() getCarDetails:{name:string, model:number, price:number}[] = []; 
  showCountryData:boolean = false;
  
  ngOnInit(): void {
    console.log('getCarDetails',this.getCarDetails);
    this.getCountryList();
  }
  constructor(private _CountryService:CountryService){
    console.log("CountryService",this._CountryService);
    
  }
  getCountryData = () =>{
    this.showCountryData = true;
    this.getCountriesDataList= this._CountryService.countriesDataList;
    console.log(this.getCountriesDataList);
  }
  getCountryList = () => {
    this.getCountryDataListArray=this._CountryService.countryList;
    console.log("countriesListArray",this.getCountryDataListArray); 
  }
  
}
