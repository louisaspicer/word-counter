import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderComponent } from './file-uploader.component';

describe('FileUploaderComponent', () => {
  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;
  const mockInputValue: any = { files: [new File(['This is some text'], 'filename')]};


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit text as an output', () => {
    component.readThis(mockInputValue);
    fixture.detectChanges();

    component.fileReadComplete.subscribe(text => {
      expect(text).toEqual('This is some text');
    });
  });
});
