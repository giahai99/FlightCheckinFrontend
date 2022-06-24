import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  noOfBags!:Number;
  data:any;

  constructor(private service:CheckinService,private router:Router) { }

  ngOnInit(): void {
    this.data = this.service.reservationData;
  }

  public checkIn() {
    let request = {
      "id": 5,
      "checkedIn": true,
      "numberOfBags": 11
    }

    console.log(this.data.id);
    console.log(this.noOfBags);
    console.log(request);

    this.service.checkIn(request).subscribe(res=>{
      this.router.navigate(['confirm']);
    })
  }

}
