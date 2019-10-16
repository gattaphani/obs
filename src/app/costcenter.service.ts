import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Costcenter} from './costcenter';
@Injectable({
  providedIn: 'root'
})
export class CostcenterService {

  constructor(private http: HttpClient) { }
getCostcenter() : Observable<Costcenter[]>
{
  return this.http.get<Costcenter[]>('http://localhost:3000/states');
}
}