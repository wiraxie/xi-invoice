import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class MasterService {

  constructor(private http:Http) { }

  data=[];
    getData(){
      return this.http.get("../../assets/master.json")
      .map(res => res.json());
    } 

}
