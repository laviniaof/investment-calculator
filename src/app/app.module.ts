import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInputComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
})
export class AppModule {}
