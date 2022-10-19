import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectiveTestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
}
