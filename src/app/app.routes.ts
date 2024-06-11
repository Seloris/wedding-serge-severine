import { Routes } from '@angular/router';
import { ListComponent } from './pages/list';
import { PhotosComponent } from './pages/photos';
import { WeddingDetailsComponent } from './pages/wedding-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mariage', pathMatch: 'full' },
  { path: 'mariage', component: WeddingDetailsComponent },
  { path: 'notre-liste', component: ListComponent },
  { path: 'galerie', component: PhotosComponent },
];
