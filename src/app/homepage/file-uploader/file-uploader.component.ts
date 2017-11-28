import {Component, EventEmitter, Output} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {
  @Output() fileReadComplete = new EventEmitter<string>();
  uploadMessage$: Observable<any>;
  uploadMessage: string;
  private uploadSubject = new Subject<string>();

  constructor() {
    this.uploadMessage$ = this.uploadSubject.asObservable();
    this.uploadMessage$.subscribe(message => {
      this.uploadMessage = message;
    });
  }

  fileChange($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const self = this;
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    if (inputValue.files[0].type !== 'text/plain') {
      self.uploadSubject.next('Unable to read file. Please upload a .txt file');
      return;
    }

    myReader.onloadend = function() {
      self.fileReadComplete.emit(myReader.result);
      self.uploadSubject.next(`${file.name} words are ready to be counted!`);
    };

    myReader.readAsText(file);
  }
}
