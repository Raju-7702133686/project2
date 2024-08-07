import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  taskId=1;
  todos=[
    {
      id:1,
      'task':'task1'
    },
    {
      id:1,
      'task':'task2'
    },
  ];

  addTask(taskName:any){
    this.todos.push({"id":this.taskId++, 'task':taskName})
  }
  delete(index:any){
    this.todos.splice(index,1);
  }
}
