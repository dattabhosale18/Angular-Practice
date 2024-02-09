import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseURL = 'http://localhost:3000/Employee';

  //READ**********
  constructor(private http: HttpClient) {}
  // this method of the service will return the output it gets from the http.get() method (which is an
  // observable object.)

  getRecords() {
    return this.http.get(this.baseURL);
  }

  //to read single record
  getRecord(id: any) {
    const getURL = `${this.baseURL}/${id}`;
    return this.http.get(getURL);
  }
  //DELETE********
  // this will delete the record with matching id(from the database)
  deleteRecord(id: any) {
    const delURL = `${this.baseURL}/${id}`;
    //console.log("[DELETE URL]" +delURL)
    return this.http.delete(delURL);
  }
  //CREATE*********
  //this will add a new record in the database
  addRecord(empdata: any) {
    return this.http.post(this.baseURL, empdata);
  }

  //UPDATE**********
  //this will update a single record
  updateRecord(empdata: any) {
    const putURL = `${this.baseURL}/${empdata.id}`;
    return this.http.put(putURL, empdata);
  }
}
