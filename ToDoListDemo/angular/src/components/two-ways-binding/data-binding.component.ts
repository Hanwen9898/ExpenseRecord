import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataBindingComponent implements OnInit {
  public userName: string = '';
  public email: string = '';
  public password: string = '';

  constructor() {
  }

  ngOnInit() {
  }
}