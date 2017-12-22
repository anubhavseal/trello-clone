import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

	private static dataService: DataService;
	boards: Board[];
	board = {};

  	constructor(dataService: DataService) { 
    	BoardsComponent.dataService = dataService;
  	}

	createBoard(): void{
		this.board['id'] = BoardsComponent.dataService.getID();
		BoardsComponent.dataService.saveBoard(this.board as Board);
		this.getBoards();
	}

	getBoards(): void {
		this.boards = BoardsComponent.dataService.getBoards();
	}
  
	ngOnInit() {
		this.getBoards();
		console.log(this.hello);
	}

}
