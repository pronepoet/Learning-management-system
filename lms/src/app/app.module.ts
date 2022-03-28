import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentForm } from './content-form';
import { FormComponent } from './form/form.component';
import { SubmitComponent } from './submit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentForm,
    FormComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
