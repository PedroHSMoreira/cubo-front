import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participation } from '../models/participation.model';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

const URL = 'http://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http: HttpClient) { }

  create(part: Participation): Observable<Participation> {
    return this.http.post<Participation>(`${URL}/participation`, part).pipe(
      tap(part => part.id)
    )
  }

  getAll(): Observable<Participation[]> {
    return this.http.get<Participation[]>(`${URL}/participation`)
  }
}
