import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  paragraphColor : boolean = true;
  inputColor : boolean = true;
  showBooksTable:boolean=false;
  booksData:any;
  constructor(private _StatesService : StatesService,private _CountryService:CountryService){
    console.log("StatesService",this._StatesService.serviceTitle); 
  }
  ngOnInit(): void {
    
  }
  fetchBooksApi(){
    this._CountryService.getBooksApi().subscribe(res => this.booksData = res);
    console.log("BooksData:",this.booksData);
    this.showBooksTable=true; 
  }
}
