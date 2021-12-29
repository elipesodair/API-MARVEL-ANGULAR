import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedComponent } from './components/featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,

  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
