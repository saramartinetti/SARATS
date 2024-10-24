import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  findById(ownerid: number) {
    throw new Error('Method not implemented.');
  }
  fill(): any {
    throw new Error('Method not implemented.');
  }
  getUserList(): User[] {
    throw new Error('Method not implemented.');
  }

  private apiUrl = ''; // Modifica con il tuo URL API

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user); // Chiamata HTTP POST per creare un utente
  }
}