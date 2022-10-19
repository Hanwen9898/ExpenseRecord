import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveTestComponent } from 'src/components/directive/directive-test.component';
import { LifeCycleComponent } from 'src/components/life-cycle/life-cycle.component';
import { DataBindingComponent } from 'src/components/two-ways-binding/data-binding.component';
import { MyHighLightDirective } from 'src/directive/my-high-light.directive';
import { FormatErrorPipe } from 'src/pipes/format-error.pipe';
import { Child1Component } from './parents/child1/child1.component';
import { Child2Component } from './parents/child2/child2.component';
import { ParentsComponent } from './parents/parents.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    LifeCycleComponent,
    MyHighLightDirective,
    DirectiveTestComponent,
    DataBindingComponent,
    FormatErrorPipe,
    PipeComponent,
    ParentsComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: []
})
export class ComponentsModule { }
