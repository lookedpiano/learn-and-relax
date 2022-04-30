import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquationComponent } from './equation/equation.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'equation', component: EquationComponent },
  { path: 'photos', component: PhotosComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
