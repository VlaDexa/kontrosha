import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { KostilComponent } from './kostil/kostil.component';
import { InputerComponent } from './inputer/inputer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    KostilComponent,
    InputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
