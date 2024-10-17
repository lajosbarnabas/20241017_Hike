import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikeItemComponent } from './hike-item/hike-item.component';
import { HikeListComponent } from './hike-list/hike-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HikeItemComponent,
    HikeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
