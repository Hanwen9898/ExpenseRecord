import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItem } from '../models/ToDoItem';
import { ToDoService } from '../services/to-do.service';
import { ToDoServiceMock } from '../services/to-do.service.mock';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  public searchString: string = '';
  public hideDone: boolean = false;
  public sortByDescDir?: SortDir;
  public sortByDateDir?: SortDir = SortDir.Asc;
  public SortDir = SortDir;
  public displayList: Array<ToDoItem> = new Array<ToDoItem>;
  private fullList: ToDoItem[] = [];

  constructor(private todoService: ToDoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    this.todoService.getAll().subscribe(todo => {
      this.displayList = todo;
      this.fullList = [...this.displayList];
      //console.log(this.displayList);
    });
  }

  ngOnDestroy() {
  }

  reload(): void {
    this.searchString = "";
    this.loadData();
  }

  

  async navToItem(item: ToDoItem): Promise<boolean> {
    return this.router.navigate(['item', item.Id], {
      relativeTo: this.route.parent
    });
  }

  async navToCreateNew(): Promise<boolean> {
    return this.router.navigate(['item', 'new'], {
      relativeTo: this.route.parent
    });
  }

  private loadData(): void {
    this.todoService.getAll().subscribe(items => {
      this.displayList = items;
      this.fullList = [...this.displayList];
      console.log(this.displayList);
    });
  }
}

enum SortDir {
  Asc = 1,
  Desc = 2
}
