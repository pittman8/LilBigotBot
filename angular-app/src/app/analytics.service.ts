import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stats } from './stats';

export interface Stats {
  _id: String;
 value: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) {}

  getstats(): Observable<Stats> {    
 //   return  this.http.get<Stats>('http://localhost:80/analytics');
    return  this.http.get<Stats>('https://bigotbotserver.azurewebsites.net/analytics');
  }
}