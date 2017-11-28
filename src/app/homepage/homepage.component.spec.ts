import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {FileHandlerService} from "./file-uploader/file-handler.service";

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let fileHandlerService: FileHandlerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      providers: [ {provide: FileHandlerService, useValue: FileHandlerServiceMock } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;

    fileHandlerService = fixture.debugElement.injector.get(FileHandlerService);
    fixture.detectChanges();
  });

  // it('should disable button until receiving file text', () => {
  //   const buttonDisabledPropertyBefore = fixture.debugElement.query(By.css('button')).properties.disabled;
  //   expect(buttonDisabledPropertyBefore).toEqual(false);
  //   component.setFileText('Example Text');
  //   fixture.detectChanges();
  //
  //   const buttonDisabledPropertyAfter = fixture.debugElement.query(By.css('button')).properties.disabled;
  //   expect(buttonDisabledPropertyAfter).toEqual(true);
  // });
  //

  it('should check if number is not prime', () => {
    const isPrime = component.isPrimeChecker(20);

    expect(isPrime).toEqual(false);
  });

  it('should check if number is prime', () => {
    const isPrime = component.isPrimeChecker(23);

    expect(isPrime).toEqual(true);
  });


});

export class FileHandlerServiceMock {
  public countMap = {};
  public countIndividualWords(text: string) {}
  private splitTextString(text: string) {}
}
