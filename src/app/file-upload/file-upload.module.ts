import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileMainComponent } from './components/file-main/file-main.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [FileMainComponent, FileUploadComponent],
  imports: [CommonModule],
})
export class FileUploadModule {}
