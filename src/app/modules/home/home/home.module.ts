import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// components
import { HeaderComponent } from './component/header/header.component';
import { TodoButtonDeleteAllComponent } from './component/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './component/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

// page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
