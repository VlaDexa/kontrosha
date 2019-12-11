import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { KostilComponent } from './kostil/kostil.component';
import { InputerComponent } from './inputer/inputer.component';


const routes: Routes = [
  {path: '', component: InputerComponent},
  {path: 'second', component: KostilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
