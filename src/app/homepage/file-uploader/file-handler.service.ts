import { Injectable } from '@angular/core';

@Injectable()
export class FileHandlerService {
  countMap = {};

  countIndividualWords(text: string): {} {
    this.countMap = {};

    this.splitTextString(text).forEach(word => {
      if (!this.countMap[word]) {
        this.countMap[word] = 0;
      }
      this.countMap[word] += 1;
    });

    return this.countMap;
  }

  private splitTextString(text: string): Array<string> {
    let withoutWhiteSpace = text.trim().replace(/\r?\n|\r/g, '');
    let withoutSpecialCharacters = withoutWhiteSpace.replace(/[^a-zA-Z\s'"]/g, '');

    let splitText: Array<string> = withoutSpecialCharacters.toLowerCase().split(' ');
    let withoutRemainingEmptyStrings: Array<string> = splitText.filter(item => item.trim() !== '');

    return withoutRemainingEmptyStrings;
  }
}
