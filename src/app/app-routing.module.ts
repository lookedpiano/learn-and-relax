import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'equation', component: EquationComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
