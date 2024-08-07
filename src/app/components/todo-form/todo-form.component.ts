import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  taskInput='';
  constructor(private todoService: TodoService){}


  add(){
    this.todoService.addTask(this.taskInput);
    this.reset();
  }

  reset(){
    this.taskInput='';
  }
}
