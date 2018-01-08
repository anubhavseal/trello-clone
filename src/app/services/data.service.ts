import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { List } from '../models/list';
import * as store from 'storejs';

@Injectable()
export class DataService {

	constructor() {
	}

	getBoards(): Promise<any> {
		return fetch('http://localhost:8080/boards');
	}

	saveBoard(board: Board): Promise<any> {
		console.log('board', board);
		return fetch('http://localhost:8080/boards', {
			method:'POST',
			mode: 'cors',
			body:JSON.stringify(board),
			headers: {
                "Content-Type": "application/json"
            }
		});
	}

	getLists(): Promise<any> {
		return;
	}

	saveList(list: List): Promise<any> {
		return;
	}
	
}