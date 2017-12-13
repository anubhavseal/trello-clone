import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BoardsComponent } from './components/boards/boards.component';
import { DataService } from './services/data.service';
import { ListsComponent } from './components/lists/lists.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
