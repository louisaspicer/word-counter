import { Injectable } from '@angular/core';

@Injectable()
export class FileHandlerService {

  constructor() { }

  splitTextString(text: string): Array<string> {
    let withoutWhiteSpace = text.trim().replace(/\r?\n|\r/g, '');
    let withoutSpecialCharacters = withoutWhiteSpace.replace(/[&\/\\#,+()$~%.:*?<>{}]/g, '');

    let splitText: Array<string> = withoutSpecialCharacters.toLowerCase().split(' ');
    let withoutRemainingEmptyStrings: Array<string> = splitText.filter(item => item.trim() !== '');

    return withoutRemainingEmptyStrings;

  }

}
