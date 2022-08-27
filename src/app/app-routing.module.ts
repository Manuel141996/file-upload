import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileMainComponent } from './file-upload/components/file-main/file-main.component';

const routes: Routes = [
  { path: 'upload', component: FileMainComponent },
  { path: '**', component: FileMainComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
