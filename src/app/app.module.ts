/* Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';

/*  global services */
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    AlbumCardComponent,
    HomepageComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //returns simulated server responses.
    InMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
