import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

list:any={};
constructor(private todoService: TodoService){ 
  this.list= this.todoService.todos;
}
remove(index:any){
  this.todoService.delete(index)
}

}
