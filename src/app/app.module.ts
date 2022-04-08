import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpeakerComponent } from './speaker/speaker.component';

@NgModule({
  declarations: [AppComponent, SpeakerComponent],
  imports: [BrowserModule, CoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
