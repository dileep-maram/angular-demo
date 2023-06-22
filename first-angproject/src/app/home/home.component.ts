import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // public details:object = [];
  showTableData : boolean = false;
  showCarData : boolean = false;
  demo = () => {
    this.showTableData = true;
    this.showCarData = true;
    const name : string = "dileep";
    console.log(name);
  }
  ngOnInit(): void {
    // this.demo();
    this.es6NewFeatures()
  }
   
  details = [
    {
      SNo : 1,
      Name : "Dileep",
      Mobile : 7702210507,
      Email : "maramdileep2@gmail.com"
    },
    {
      SNo : 2,
      Name : "Nagendra",
      Mobile : 7702234567,
      Email : "nagendra2@gmail.com"
    },
    {
      SNo : 3,
      Name : "Jyoshna",
      Mobile : 7654310507,
      Email : "jyoshna2@gmail.com"
    }
  ];
  carDetails = [ 
    {
      name : "BMW",
      model : 2005,
      price:1500000
    },
    {
      name : "Jaguar",
      model : 2015,
      price:1900000
    },
    {
      name : "Benz",
      model : 2009,
      price:2000000
    }
  ];
  es6NewFeatures = () => {
    let name = "dileep";
    name = "Jyoshna";
    console.log(name);
  }

  
}
