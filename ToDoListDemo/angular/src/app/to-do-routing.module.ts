import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoItemGuard } from './to-do-item.guard';
import { ToDoItemComponent } from './todo-item/to-do-item.component';
import { ToDoListComponent } from './todo-list/to-do-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'items'
      },
      {
        path: 'items',
        component: ToDoListComponent
      },
      {
        path: 'item/:itemId',
        component: ToDoItemComponent,
        canDeactivate: [ToDoItemGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ToDoRoutingModule {

}
