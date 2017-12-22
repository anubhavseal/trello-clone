import { Component } from '@angular/core';
import { Board } from './models/board';
import { DataService } from './services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	board = {};
	private static dataService: DataService;
	test = 'hello';
	constructor(dataService: DataService) { 
		AppComponent.dataService = dataService;
	}

	createBord(): void{
		this.board['id'] = AppComponent.dataService.getID();
		AppComponent.dataService.saveBoard(this.board as Board);
	}

	ngOnInit() {
		AppComponent.dataService.getBoards();
	}
}
