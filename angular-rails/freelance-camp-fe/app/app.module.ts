import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DocumentsComponent,
    HomepageComponent,
    ProposalListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
