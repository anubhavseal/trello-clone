import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { BoardsComponent } from './components/boards/boards.component';
import { ListsComponent } from './components/lists/lists.component';

import { DataService } from './services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { CreateBoardComponent } from './create-board/create-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    ListsComponent,
    CreateBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
