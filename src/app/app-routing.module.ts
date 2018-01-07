import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardsComponent} from './components/boards/boards.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:BoardsComponent},
  {path: 'lists', component: ListsComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
