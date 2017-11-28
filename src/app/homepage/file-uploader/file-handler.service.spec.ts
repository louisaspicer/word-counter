
import { FileHandlerService } from './file-handler.service';

describe('FileHandlerService', () => {
  let service: FileHandlerService;
  const TEXT = `They \n were not railway children to begin with. I don't suppose they had
  ever thought about  railways \n `;

  beforeEach(() => { service = new FileHandlerService(); });

  it('should count the individual words of the text', () => {
    const count = service.countIndividualWords(TEXT);
    const expectedMap = { "they": 2, "were": 1, "not": 1, "railway": 1, "children": 1, "to": 1, "begin": 1, "with": 1,
      "i": 1, "don't": 1, "suppose": 1, "had": 1, "ever": 1, "thought": 1, "about": 1, "railways": 1 };

    expect(count).toEqual(expectedMap);
  });

  it('should ignore special characters on the end of words', () => {
    const specialWords = "Is this the right thing to do? I think so! Here's another special word,\n";
    const expectedMap = { "is": 1, "this": 1, "the": 1, "right": 1, "thing": 1, "to": 1, "do": 1,
      "i": 1, "think": 1, "so": 1, "here's": 1, "another": 1, "special": 1, "word": 1 };
    const count = service.countIndividualWords(specialWords);

    expect(count).toEqual(expectedMap);
  });

  it('should ignore numbers in the text', () => {
    const numbersInText = "1 number 2 number 3 number 4";
    const expectedMap = { "number" : 3 };

    const count = service.countIndividualWords(numbersInText);

    expect(count).toEqual(expectedMap);
  })

});
