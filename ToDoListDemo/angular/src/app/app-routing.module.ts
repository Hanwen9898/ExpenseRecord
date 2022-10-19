import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveTestComponent } from 'src/components/directive/directive-test.component';
import { LifeCycleComponent } from 'src/components/life-cycle/life-cycle.component';
import { ParentsComponent } from 'src/components/parents/parents.component';
import { PipeComponent } from 'src/components/pipe/pipe.component';
import { DataBindingComponent } from 'src/components/two-ways-binding/data-binding.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo' },
  { path: 'todo', loadChildren: () => import('./to-do.module').then(m => m.ToDoModule) },
  { path: 'component', component: LifeCycleComponent },
  { path: 'directive', component: DirectiveTestComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'parents', component: ParentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
