import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsServiceService {

  constructor(private http: HttpClient) {
    const r = this.getData().subscribe(res => {
      this.data = res
      console.log(this.data.length)
      this.usersLength.next(this.data.length)
    })
  }
  usersLength: BehaviorSubject<any> = new BehaviorSubject(null)
  data: any[] = []

  // Get All Data
  getData(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/data")
  }

  // post user
  postData(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/data", user)
  }

  // delete user
  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/data/" + id)
  }

  // update user
  updateUser(model: any, id: any) {
    return this.http.put("http://localhost:3000/data/" + id, model)
  }
 
  // get user by id
  getUserById(id: any) {
    return this.http.get("http://localhost:3000/data/" + id)
  }

  // view user
  viewUser(id: any): Observable<any> {
    return this.http.get<any>("http://localhost:3000/data/" + id)
  }
}
