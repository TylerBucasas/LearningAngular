import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeEqualsPipe } from './content-type-equals.pipe';
import { FormsModule } from '@angular/forms';
import { FindContentWithTitlePipe } from './find-content-with-title.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { HoverCardDirective } from './hover-card.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponentComponent } from './create-component/create-component.component';

import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentTypeEqualsPipe,
    FindContentWithTitlePipe,
    HoverStyleDirective,
    HoverCardDirective,
    CreateContentComponent,
    MessagesComponent,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
