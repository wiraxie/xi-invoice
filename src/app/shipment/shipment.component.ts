import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ShipmentService } from './shipment.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  data : Observable<Array<any>>;
  anyErrors: Error;

  constructor(private shipmentService: ShipmentService) {}

  getData()
  {
    this.shipmentService.getData().subscribe(data=>
    {
      this.data = data;
    });
  }

  ngOnInit() 
  {
    this.getData();
  }

  p:number = 1;

}
