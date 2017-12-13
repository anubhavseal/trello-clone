import { Injectable } from '@angular/core';
import { Board } from '../models/board'
import { BOARDS } from '../mock-boards';
import { List } from '../models/list';
import * as store from 'storejs';

@Injectable()
export class DataService {

  static boardsStorageInitialized: boolean;
  private static boardsCount;
  private boards: Board[];
  private lists: List[];


  constructor() {
    if (store.get('boards') === undefined) {
      DataService.boardsStorageInitialized = false;
      store.set('boards.count', 0);
      this.boards = []; 
    } else {
      DataService.boardsStorageInitialized = true;
      this.boards = store.get('boards');
    }
  }

  getBoards(): Board[] {
    this.boards = store.get('boards');
    return this.boards;
  }

  saveBoard(board: Board): void {
    this.boards.push(board);
    store.set('boards',this.boards);
  }

  generateBoardId(): number {
    DataService.boardsCount =  store.get('boards.count') + 1;
    store.set('boards.count', DataService.boardsCount);
    return DataService.boardsCount++;
  }

  getLists(): List[] {
    this.lists = store.get('lists');
    return this.lists;
  }

  saveLists(list: List): void {
    this.lists.push(list);
    store.set('lists',this.lists);
  }
  
}