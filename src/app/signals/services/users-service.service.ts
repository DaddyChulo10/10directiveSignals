import { SingeUserReponse } from './../interface/user-request.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interface/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject(HttpClient)
  private baseUrl = 'https://reqres.in/api/users'


  getUserById(id: number): Observable<User> {
    return this.http.get<SingeUserReponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map(resultado => resultado.data),
        // tap(console.log())
      )
    // return 'a'
  }
}
