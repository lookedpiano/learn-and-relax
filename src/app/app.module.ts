import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';
import { HeaderComponent } from './header/header.component';
import { DecisionComponent } from './decision/decision.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHighlightDirective,
    HeaderComponent,
    DecisionComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
