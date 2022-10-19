import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit, DoCheck {
  public logs: Array<string> = [];

  @Input()
  public title: string = "父层的传递进来的标题";


  @Input()
  public greeting: string = "";

  @Input()
  public user: { name: string } = { name: "" };

  message: string = "初始化消息";

  oldUsername: string = ""

  changeDetected: boolean = false;

  noChangeCount: number = 0;

  constructor() {
    /**
     * 构造函数里面最好只做一些简单的赋值操作，不要做复杂的逻辑
     * 获取服务端数据、业务逻辑等不要实现在构造函数里面
     * 想知道详细的原因请看这篇解释http://misko.hevery.com/code-reviewers-guide/flaw-constructor-does-real-work/
     */
    this.logs.push("constructor...");

    var greeting = "hello";
    greeting = "hello w";
    var user = { name: "Tom" };
    user.name = "Jerry";
  }

  ngOnChanges() {
    this.logs.push("1-ngOnChanges...");
  }

  ngOnInit() {
    this.logs.push("2-ngOnInit...");
  }

  // ngDoCheck() {
  //   this.logs.push("3-ngDoCheck...");
  // }

  ngAfterContentInit() {
    this.logs.push("4-ngAfterContentInit...");
  }

  ngAfterContentChecked() {
    // this.logs.push("5-ngAfterContentChecked...");
  }

  ngAfterViewInit() {
    this.logs.push("6-ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    // this.logs.push("7-ngAfterViewChecked...");
  }

  ngOnDestory() {
    this.logs.push("8-ngOnDestory...");
  }




  ngDoCheck(): void {
    if (this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      console.log("DoCheck:user.name从" + this.oldUsername + "变为" + this.user.name);
      this.oldUsername = this.user.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    }
    else {
      this.noChangeCount++;
      console.log("DoCheck:user.name没有变化时ngDoCheck方法已经被调用" + this.noChangeCount + "次");
    }
    this.changeDetected = false;
  }

}
