import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ToDoItem } from '../models/ToDoItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class ToDoService {

  todosUrl:string = 'http://localhost:5225';

  todos:ToDoItem[] = [];

  constructor(private http:HttpClient) { }

  getAll(): Observable<ToDoItem[]>{
    return this.http.get<ToDoItem[]>(`${this.todosUrl}/api/items`);
  }

  getOne(id: string): Observable<ToDoItem | never> {
   return this.http.get<ToDoItem>(`${this.todosUrl}/api/items/${id}`);
  }

  createOne(body: ToDoItem): Observable<ToDoItem> {
    const todo: ToDoItem = {
      ...body,
      id: uuidv4(),
      createtime: new Date().toISOString()
    };
    this.http.post<ToDoItem>(`${this.todosUrl}/api/items/`, todo,httpOptions).subscribe();
    return of(todo);
  }
  
  updateOne(id: string, body: ToDoItem): Observable<ToDoItem | never> {
    return this.http.put<ToDoItem>(`${this.todosUrl}/api/items/${id}`, body, httpOptions);
  }

  deleteOne(id: string): Observable<string> {
    this.http.delete<ToDoItem>(`${this.todosUrl}/api/items/${id}`).subscribe();
    console.log( `delete an item by ${this.todosUrl}/api/items/${id}`)
    return of(id)
  }

}
