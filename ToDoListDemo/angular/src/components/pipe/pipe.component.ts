import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pipe-component',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipeComponent implements OnInit {

  public errorMessage: string = 'This is error message';

  constructor() {
  }

  ngOnInit() {

  }
}
