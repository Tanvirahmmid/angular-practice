import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowinfoComponent } from './showinfo/showinfo.component';
import { ShowwComponent } from './showw/showw.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowinfoComponent,
    ShowwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
