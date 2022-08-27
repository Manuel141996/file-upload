import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [DatePipe],
})
export class FileUploadComponent implements OnInit {
  public currentDate = new Date();
  currentYear: number = 0;
  previousYear: number = 0;
  public fileList: Array<File> = [];

  constructor(private date: DatePipe) {
    this.currentYear = this.date.transform(
      this.currentDate,
      'yyyy'
    ) as unknown as number;
    this.previousYear = this.currentYear - 1;
  }

  ngOnInit(): void {}

  fileAccept(event: Event | DragEvent) {
    let file: File = <File>(event.target as HTMLInputElement).files[0];

    console.log('file', file);

    this.fileList.push(file);
  }

  convertDate() {
    let currentMonth: string = this.date.transform(this.currentDate, 'MMMM');
    return currentMonth;
  }
  convertDay() {
    let currentDay: string = this.date.transform(this.currentDate, 'dd');
    return currentDay;
  }

  onUpload() {
    console.log('came here');
  }
}
