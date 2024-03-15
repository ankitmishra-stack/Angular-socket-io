import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocketComponent } from './socket/socket.component';

const routes: Routes = [
  {path:'', component:SocketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
