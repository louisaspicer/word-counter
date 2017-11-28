import { Component } from '@angular/core';
import {FileHandlerService} from "./file-uploader/file-handler.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  fileText: string;
  ready = false;
  objectKeys = Object.keys;
  wordCountMap = {};
  wordCount$: Observable<any>;
  private wordCountSubject = new Subject<{}>();

  constructor(private fileHandlerService: FileHandlerService) {
    this.wordCount$ = this.wordCountSubject.asObservable();
    this.wordCount$.subscribe(map => {
      this.wordCountMap = map;
      this.ready = true;
    });
  }

  setFileText(fileText: string) {
    this.fileText = fileText;
  }

  count(): void {
    this.wordCountSubject.next(this.fileHandlerService.countIndividualWords(this.fileText));
  }

  isPrimeChecker(value: number): boolean {
    return this.isPrime(value);
  }

  private isPrime(number): boolean {
    let start = 2;
    while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) {
        return false;
      }
    }
    return number > 1;
  }

}
