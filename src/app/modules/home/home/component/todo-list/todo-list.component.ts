import { Component, DoCheck,  } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent  implements DoCheck  {

  public taskLista: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor () {}

  ngDoCheck(): void {
  this.setLocalStorate();

 }


  public setEmiitTaskList(event: string) {
    this.taskLista.push({task: event, cheked: false})
  }

  public deleteTaskList(index: number) {
    this.taskLista.splice(index, 1)
  }

  public deleteAll () {
    const confirm = window.confirm("Você realmente deseja apagar tudo?")

    if(confirm)
    this.taskLista = []
  }

  public validationInput (event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("A tesk está vazia, deseja deletar ?")

        if(confirm) {
          this.deleteTaskList(index)
      }
    }
  }

  public setLocalStorate () {
    if(this.taskLista) {
      this.taskLista.sort( (first, last) => Number(first.cheked) - Number(last.cheked) )
      localStorage.setItem("list", JSON.stringify(this.taskLista))
    }

  }






}
