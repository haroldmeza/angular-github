import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlSearch, urslUser } from '../constants';
import { Results } from '../models/results';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  urlSearch : String = urlSearch;
  urlUser : String = urslUser;

  constructor(private http: HttpClient) { }

  searchUsers(stringSearch : String){
    return this.http.get<Results>(`${this.urlSearch}${stringSearch}`);
  }

  searchUserInfo(user : String){
    return this.http.get<User>(`${this.urlUser}${user}`);
  }
}
