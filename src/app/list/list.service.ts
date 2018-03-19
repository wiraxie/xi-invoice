import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class ListService {

  constructor(private http:Http) { }

  data:any=[];
    getData(){
      return this.http.get("../../assets/list.json")
      .map(res => res.json());
    } 

}
