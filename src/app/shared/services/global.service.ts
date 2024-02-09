import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  //baseURL = 'http://localhost:3000/Employee'; old URL
  baseURL = 'http://localhost:3000/'; //new URL

  constructor(private http: HttpClient) {}

  getRecords(table: string) {
    return this.http.get(this.baseURL + table);
  }

  getRecord(table: string, id: any) {
    const getURL = `${this.baseURL}${table}/${id}`;
    return this.http.get(getURL);
  }

  deleteRecord(table: string, id: any) {
    const delURL = `${this.baseURL}${table}/${id}`;
    //console.log("[DELETE URL]" +delURL)
    return this.http.delete(delURL);
  }

  addRecord(table: string, empdata: any) {
    return this.http.post(this.baseURL, empdata);
  }

  updateRecord(table: string, empdata: any) {
    const putURL = `${this.baseURL}${table}/${empdata.id}`;
    return this.http.put(putURL, empdata);
  }

  //store the user in the sessionstorage
  signIn(user: string) {
    sessionStorage.setItem('user_key', user);
  }
  //remove the user from the sessionstorge
  signOut() {
    sessionStorage.removeItem('user_key');
  }
}
