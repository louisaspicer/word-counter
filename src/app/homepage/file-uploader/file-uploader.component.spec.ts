import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderComponent } from './file-uploader.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('FileUploaderComponent', () => {
  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;
  const mockInputValue: any = { files: [new File(['This is some text'], 'filename', {type: 'text/plain'})]};


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploaderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit word count map as an output', () => {
    component.readThis(mockInputValue);
    fixture.detectChanges();

    component.fileReadComplete.subscribe(text => {
      expect(text).toEqual('This is some text');
    });
  });

  it('should emit success message if input is a .txt file', () => {
    const mockFilename = mockInputValue.files[0].name;
    component.readThis(mockInputValue);
    fixture.detectChanges();

    component.uploadMessage$.subscribe(message => {
      expect(message).toEqual(`${mockFilename} words are ready to be counted!`);
    });
  });

  it('should emit error message if input is not a .txt file', () => {
    const mockIncorrectInputValue: any = { files: [new File(['This is some text'], 'filename', {type: 'image/jpeg'})] };

    component.readThis(mockIncorrectInputValue);
    fixture.detectChanges();

    component.uploadMessage$.subscribe(message => {
      expect(message).toEqual('Unable to read file. Please upload a .txt file');
    });
  });
});
