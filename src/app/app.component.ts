import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  todos=[
      {
        label:"dO assignment",
        done:false,
        priority: 3
      },
    {
      label: "Breakfast",
      done: true,
      priority: 4
    },
     {
      label: "lab",
      done: true,
      priority: 5
    },
     {
      label: "ARTificial MArks",
      done: true,
      priority: 2
    },
    
    ];
  addTodo(newTodolabel)
  {
    var newTodo=
    {
      label: newTodolabel,
      priority: 1,
      done: false
     };
     this.todos.push(newTodo);
  }
  deleteTodo(todo)
  {
    this.todos=this.todos.filter(t => t.label !== todo.label);
  }
}
