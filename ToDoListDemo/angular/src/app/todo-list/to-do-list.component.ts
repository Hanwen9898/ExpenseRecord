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

  onSearchTextChange(text: string): void {
    this.searchString = text;
    this.displayList = this.searchString ? this.fullList.filter(i => i.name.toLowerCase().includes(this.searchString.toLowerCase())) : this.fullList.slice();
  }

  toggleSortByDesc(): void {
    switch (this.sortByDescDir) {
      case SortDir.Asc:
        this.sortByDescDir = SortDir.Desc;
        break;
      case SortDir.Desc:
        this.sortByDescDir = undefined;
        break;
      default:
        this.sortByDescDir = SortDir.Asc;
    }
    this.displayList = [...this.displayList.sort((i1, i2) => i1.name.localeCompare(i2.name) * (this.sortByDescDir === SortDir.Asc ? 1 : -1))];
  }

  toggleSortByDate(): void {
    switch (this.sortByDateDir) {
      case SortDir.Asc:
        this.sortByDateDir = SortDir.Desc;
        break;
      case SortDir.Desc:
        this.sortByDateDir = undefined;
        break;
      default:
        this.sortByDateDir = SortDir.Asc;
    }
    this.displayList = [... this.displayList.sort((i1, i2) => (new Date(i1.createtime).getTime() - new Date(i2.createtime).getTime()) * (this.sortByDateDir === SortDir.Asc ? 1 : -1))];
    console.log(this.displayList);
  }

  toggleHideDone(): void {
    this.hideDone = !this.hideDone;
    this.displayList = this.hideDone ? this.fullList.filter(i => !i.done) : this.fullList.slice();
  }

  toggleItemDone(item: ToDoItem): void {
    const oldValue = item.done;
    item.done = !item.done;
    this.todoService.updateOne(item.id, item);
  }

  async navToItem(item: ToDoItem): Promise<boolean> {
    return this.router.navigate(['item', item.id], {
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
