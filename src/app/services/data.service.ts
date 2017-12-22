import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { List } from '../models/list';
import * as store from 'storejs';

@Injectable()
export class DataService {

	static boardsStorageInitialized: boolean;
	private static boardsCount;
	private boards: Board[];
	private lists: List[];


	constructor() {
		if(store.get('boards') === undefined)store.set('boards', [{}]);
	}

	getID(): string {
		const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);;
		return id;
	}

	getBoards(): Board[] {
		this.boards = store.get('boards');
		return this.boards;
	}

	saveBoard(board: Board): void {
		this.boards.push(board);
		store.set('boards',this.boards);
	}
	
}