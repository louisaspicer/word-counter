
import { FileHandlerService } from './file-handler.service';

fdescribe('FileHandlerService', () => {
  let service: FileHandlerService;
  const TEXT = `They \n were not railway children to begin with. I don't suppose they had
  ever thought about  railways \n `;
  const INDIVIDUAL_WORDS = [ 'they', 'were', 'not', 'railway', 'children', 'to', 'begin',
    'with', 'i', 'don\'t', 'suppose', 'they', 'had', 'ever', 'thought', 'about', 'railways' ];

  beforeEach(() => { service = new FileHandlerService(); });

  it('should count the individual words of the text', () => {
    let count = service.countIndividualWords(TEXT);
    let expectedMap = { "they": 2, "were": 1, "not": 1, "railway": 1, "children": 1, "to": 1, "begin": 1, "with": 1,
      "i": 1, "don't": 1, "suppose": 1, "had": 1, "ever": 1, "thought": 1, "about": 1, "railways": 1 };

    expect(count).toEqual(expectedMap);
  });
});
