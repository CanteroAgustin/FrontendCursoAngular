import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: String;

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('agustin').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this.todoService.deleteTodo("agustin", id).subscribe(
      response => {
        this.refreshTodos();
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos',id]);
  }

  addTodo() {
    this.router.navigate(['todos',-1]);
  }

}
