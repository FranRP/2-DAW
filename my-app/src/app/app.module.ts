import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
