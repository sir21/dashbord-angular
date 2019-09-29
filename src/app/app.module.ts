import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatTableModule, 
  MatFormFieldModule, 
  MatPaginatorModule, 
  MatInputModule 
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './home/table/table.component';
import { StyleComponent } from './home/style/style.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TextColorDirective } from './directives/text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    TableComponent,
    StyleComponent,
    HighlightDirective,
    TextColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
