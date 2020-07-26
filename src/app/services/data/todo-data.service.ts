import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  public retrieveAllTodos(userName){
    return this.http.get<Todo[]>(`${API_JPA_API_URL}/users/${userName}/todos`);
  }

  public deleteTodo(userName, id){
    return this.http.delete(`${API_JPA_API_URL}/users/${userName}/todos/${id}`);
  }

  public retrieveTodo(userName, id){
    return this.http.get<Todo>(`${API_JPA_API_URL}/users/${userName}/todos/${id}`);
  }

  public updateTodo(userName, id, todo){
    return this.http.put(`${API_JPA_API_URL}/users/${userName}/todos/${id}`, todo);
  }

  public createTodo(userName, todo){
    return this.http.post(`${API_JPA_API_URL}/users/${userName}/todos`, todo);
  }

}
