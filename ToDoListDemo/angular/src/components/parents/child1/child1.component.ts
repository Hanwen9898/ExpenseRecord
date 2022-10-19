import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child1-component',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {

  @Input()
  public title: string = "父层的传递进来的标题";

  @Output()
  public newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }

  public clickTest(data: any): void {
    this.newItemEvent.emit("child1 component event");
  }
}
