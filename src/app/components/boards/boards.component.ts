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

	createBoard(): void {
		BoardsComponent.dataService.saveBoard(this.board as Board)
		.then(response => {console.log(response.text())
			this.getBoards();
		})
		.catch(err => console.log(err));
		
	}

	getBoards(): void {
		BoardsComponent.dataService.getBoards()
		.then(response => {
			response.json().then(data => {
				this.boards = data;
			});
		})
		.catch(err => {return console.log(err)});
	}
  
	ngOnInit() {
		this.getBoards();
	}

}
