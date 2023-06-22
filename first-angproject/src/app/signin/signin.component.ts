import { Component,OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  profileImage:string = '../../assets/media/D.Photo.jpg';
  showTitle:boolean = false;
  capitalData:any;
  constructor(private _StatesService:StatesService){

  }
  setShowTitle = () => {
    this.showTitle = true;
  }
  ngOnInit(): void {
    
  }
  fetchCapitalApi(){
    this._StatesService.getCapitalApi().subscribe(res => this.capitalData = res);
    console.log("CountriesCapitalData:",this.capitalData);
  }
  title = "signin works!";
}
