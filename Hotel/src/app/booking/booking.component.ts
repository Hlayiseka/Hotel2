import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  members = [];
  sho:any={};
  sho2:any = {};

  price;
  total;
  val;
  days;
  guests;
  sho11:any ={};
  sho22:any ={};

  save(k) {


    if (k ==1){
 
      this.members.push(this.sho);
      console.log(this.sho);
      this.sho = {};
 
 
      this.price = 1500;
      this.total = this.members[0].guests*this.members[0].days*this.price;
      this.sho2.total = this.total;
      this.days = this.members[0].days;
      this.guests = this.members[0].guests;
      this.members.splice(0,1);
    }
  }
  ngOnInit() {
  }

}
