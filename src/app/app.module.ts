import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { PainelPessoasComponent } from './components/painel-pessoas/painel-pessoas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PainelPessoasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
