import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { List } from '../models/list';
import * as store from 'storejs';

@Injectable()
export class DataService {

	private boards: Board[];
	private lists: List[];


	constructor() {
	}

	getBoards(): Promise<any> {
		return fetch('https://demo4104384.mockable.io/boards');
				
	}

	saveBoard(board: Board): Promise<any> {
		return fetch('http://demo4104384.mockable.io/',{
			method:'POST'
		});
	}
	
}