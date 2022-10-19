import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child2-component',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {
  @Input()
  public title: string = "父层的传递进来的标题";


  @Output()
  public newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }

  public clickTest(data: any): void {
    this.newItemEvent.emit("child2 component event");
  }
}
