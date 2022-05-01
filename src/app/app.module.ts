import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';
import { HeaderComponent } from './header/header.component';
import { DecisionComponent } from './decision/decision.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHighlightDirective,
    HeaderComponent,
    DecisionComponent,
    PhotosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
