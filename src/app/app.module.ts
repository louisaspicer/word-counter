import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FileUploaderComponent } from './homepage/file-uploader/file-uploader.component';
import { FileHandlerService } from './homepage/file-uploader/file-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FileUploaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FileHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
