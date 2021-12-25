import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any = environment.baseURL;
  userToken: any;
  constructor(
    private http: HttpClient
  ) { }

  getData(url) {
    return this.http.get(this.baseUrl + url);
  }
  postData(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }
  getDataWithToken(url) {
    this.userToken=localStorage.getItem("token");
    let header = new HttpHeaders();
    header = header.set("authorization", "Bearer "+this.userToken);
    header = header.set("Content-Type", "application/json; charset=utf-8");
    return this.http.get(this.baseUrl + url + "?cache=false", { headers: header });
  }

  DeleteDataWithToken(data) {
    this.userToken=localStorage.getItem("token");
    let header = new HttpHeaders();
    header = header.set("authorization", "Bearer "+this.userToken);
    header = header.set("Content-Type", "application/json; charset=utf-8");
    return this.http.delete(this.baseUrl + 'content/building?d=1'+data, { headers: header });
  }

  postDataWithToken(url, data) {
    this.userToken=localStorage.getItem("token");
    let header = new HttpHeaders();
    header = header.set("authorization", "Bearer "+this.userToken);
    header = header.set("Content-Type", "application/json; charset=utf-8");
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
  PatchDataWithToken(url, data) {
    this.userToken=localStorage.getItem("token");
    let header = new HttpHeaders();
    header = header.set("authorization", "Bearer "+this.userToken);
    header = header.set("Content-Type", "application/json; charset=utf-8");
    return this.http.patch(this.baseUrl + url, data, { headers: header });
  }
}
