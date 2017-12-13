import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  private dataService: DataService;
  boards: Board[];
  board: Board;

  constructor(dataService: DataService) { 
    this.dataService = dataService;
    this.boards = [];
    this.board = { id: 1, title: 'Board Title' }
  }

  createBoard(board: Board): void{
    this.board.id = this.dataService.generateBoardId();
    this.dataService.saveBoard(this.board);
    this.getBoards();
  }

  getBoards(): void {
      this.boards = this.dataService.getBoards();
  }
  
  ngOnInit() {
    if (DataService.boardsStorageInitialized) this.getBoards();
  }

}
