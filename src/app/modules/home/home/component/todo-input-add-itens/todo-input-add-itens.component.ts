import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public taskListEmiter = new EventEmitter();

  inputToDoList: string = '';

  enviaTaskListEmiter() {
    this.inputToDoList = this.inputToDoList.trim();
    if(this.inputToDoList) {
      this.taskListEmiter.emit(this.inputToDoList);
      this.inputToDoList = '';
    }
  }


}
