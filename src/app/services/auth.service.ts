import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";

@Injectable()
export class AuthService {

  user$: Observable<User>;

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {

  }

}
