import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'models/user.model';
import { ReposModel } from 'models/repos.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(
    private http: HttpClient
  ) {}

  getUserData(user: string): Observable<UserModel>{
    return this.http.get<any>(`https://api.github.com/users/${user}`)
  }

  getReposUserData(user: string): Observable<ReposModel[]>{
    return this.http.get<any>(`https://api.github.com/users/${user}/repos`)
  }
}
