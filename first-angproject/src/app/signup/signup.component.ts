import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  showStateData:boolean = false;
  states = () => {
    this.showStateData = true;
  }
  ngOnInit(): void {

  }
  
  stateData = [
    {
      state : "AP",
      Population : 14
    },
    {
      state : "ArunachalPradesh",
      Population : 9
    },
    {
      state : "Assam",
      Population : 17
    },
    {
      state : "Bihar",
      Population : 15
    },
    {
      state : "Chattisgarh",
      Population : 8
    },
    {
      state : "Goa",
      Population : 6
    },
    {
      state : "Gujarat",
      Population : 10
    },
    {
      state : "Haryana",
      Population : 12
    },
    {
      state : "HimachalPradesh",
      Population : 7
    },
    {
      state : "Jammu&Kashmir",
      Population : 11
    },
    {
      state : "Jarkhand",
      Population : 9
    },
    {
      state : "MadhyaPradesh",
      Population : 15
    },
    {
      state : "Telangana",
      Population : 12
    },
    {
      state : "Maharashtra",
      Population : 19
    },
    {
      state : "Manipur",
      Population : 20
    },
    {
      state : "Meghalaya",
      Population : 22
    },
    {
      state : "Mizoram",
      Population : 8
    },
    {
      state : "Nagaland",
      Population : 14
    },
    {
      state : "Karnataka",
      Population : 15
    },
    {
      state : "Tamilnadu",
      Population : 14
    },
    {
      state : "Kerala",
      Population : 10
    },
    {
      state : "Orissa",
      Population : 19
    },
    {
      state : "Punjab",
      Population : 11
    },
    {
      state : "Rajasthan",
      Population : 22
    },
    {
      state : "Sikkim",
      Population : 9
    },
    {
      state : "Tripura",
      Population : 20
    },
    {
      state : "UP",
      Population : 12
    },
    {
      state : "Uttarakhand",
      Population : 24
    },
    {
      state : "WestBengal",
      Population : 25
    }
  ]

}
