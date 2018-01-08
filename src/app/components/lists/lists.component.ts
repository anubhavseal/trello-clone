import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { List } from '../../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  private static dataService: DataService;
  lists: List;
  list = {};

  constructor(dataService: DataService) {
      ListsComponent.dataService = dataService;
   }
  
  getLists(): void {
    ListsComponent.dataService.getLists()
    .then(response => {
      response.json()
      .then(data => this.lists = data);
  })
  }

  createList(): void {
    ListsComponent.dataService.saveList(this.list as List)
    .then(res => console.log(res.text()))
    .catch(err => console.log(err));
  }

  ngOnInit() {
    this.getLists();
  }

}
