import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MasterService } from './master.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit
{

  data : Observable<Array<any>>;
  anyErrors: Error;

  constructor(private masterService: MasterService) {}

  getData()
  {
    this.masterService.getData().subscribe(data=>
    {
      this.data = data;
    });
  }

  ngOnInit() 
  {
    this.getData();
  }

  p: number = 1;
}
