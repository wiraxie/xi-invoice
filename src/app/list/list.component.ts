import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data : Observable<Array<any>>;
  anyErrors: Error;

  constructor(private listService: ListService) {}

  getData()
  {
    this.listService.getData().subscribe(data=>
    {
      this.data = data;
    });
  }

  ngOnInit() 
  {
    this.getData();
  }

}
