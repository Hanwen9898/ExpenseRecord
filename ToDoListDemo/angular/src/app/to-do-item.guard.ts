import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDoItemComponent } from './todo-item/to-do-item.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemGuard implements CanDeactivate<ToDoItemComponent> {
  canDeactivate(
    component: ToDoItemComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
}
