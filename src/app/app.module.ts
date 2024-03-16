import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeComponentComponent } from './le-component/le-component.component';
import {FormsModule} from "@angular/forms";
import { MessagesDetailsComponent } from './messages-details/messages-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LeComponentComponent,
    MessagesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
