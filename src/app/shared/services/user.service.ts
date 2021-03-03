import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/pages/login/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private SERVER_URL: String = environment.SERVER_URL;
  constructor(private httpClient: HttpClient) {}

  userLogin(user: User) {
    const API_URL = this.SERVER_URL + '/login';
    return this.httpClient.post(API_URL, {
      email: user.email,
      password: user.password,
    });
  }
}
