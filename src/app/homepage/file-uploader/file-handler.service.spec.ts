
import { FileHandlerService } from './file-handler.service';

fdescribe('FileHandlerService', () => {
  let service: FileHandlerService;
  const TEXT = `They were not railway children to begin with. I don't suppose they had
  ever thought about railways except as a means of getting to Maskelyne
  and Cook's, the Pantomime, Zoological Gardens, and Madame Tussaud's.`;

  beforeEach(() => { service = new FileHandlerService(); });

  it('should split text string into individual words', () => {
    const individualWords = service.splitTextString(TEXT);
    const expectedArray = ['they', 'were', 'not', 'railway', 'children', 'to', 'begin',
      'with', 'i', 'don\'t', 'suppose', 'they', 'had', 'ever', 'thought', 'about', 'railways',
      'except', 'as', 'a', 'means', 'of', 'getting', 'to', 'maskelyne',
      'and', 'cook\'s', 'the', 'pantomime', 'zoological', 'gardens', 'and', 'madame', 'tussaud\'s'];

    expect(individualWords).toEqual(expectedArray);
  });
});
