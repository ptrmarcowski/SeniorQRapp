import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../config";
import { LoginModel, LoginResponse, UserData } from "../models/models";

@Injectable({ providedIn: 'root' })
export class MainService {
    private readonly USER_ID_KEY = "UserId";
    constructor(
        private httpclient: HttpClient
    ) { }

    public getCurrentUserId(): number {
        let userIdValue = localStorage.getItem(this.USER_ID_KEY);
        if (userIdValue && userIdValue != '') {
            return +userIdValue;
        }

        return 0;
    }

    public setCurrentUserId(userId: number) {
        localStorage.setItem(this.USER_ID_KEY, userId.toString());
    }

    public clearCurrentUser() {
        localStorage.setItem(this.USER_ID_KEY, '');
    }

    public ping() {
        return this.get<string>(`${API_URL}ping`);
    }

    public createUser(email: string, pass: string) {
        return this.get<boolean>(`${API_URL}createUser/${email}/${pass}`);
    }

    public login(model: LoginModel) {
        return this.post<LoginResponse>(`${API_URL}login`, model);
    }

    public register(model: LoginModel) {
        return this.post<LoginResponse>(`${API_URL}register`, model);
    }

    public logout() {
        this.clearCurrentUser();
    }

    public getUserDataById(userId:number) {
        return this.get<UserData>(`${API_URL}user/${userId}`);
    }

    public getUserDataByHash(hash:string) {
        return this.get<UserData>(`${API_URL}userViaHash/${hash}`);
    }

    public editUser(model: UserData) {
        return this.post<boolean>(`${API_URL}editUser`, model);
    }

    private get<T>(url: string, params?: any): Observable<T> {
        //maybe add header for safety
        return this.httpclient.get<T>(url, {
            params: this.buildUrlSearchParams(params),
        })
    }

    private post<T>(url: string, data?: any, params?: any): Observable<T> {
        //maybe add header for safety
        return this.httpclient.post<T>(url, data, {
            params: params,
        });
    }

    private buildUrlSearchParams(params: any): HttpParams {
        let searchParams = new HttpParams();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                searchParams = searchParams.append(key, params[key]);
            }
        }
        return searchParams;
    }
}