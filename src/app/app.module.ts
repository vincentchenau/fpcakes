import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQSComponent } from './components/faqs/faqs.component';
import { ProductDetailComponent } from './components/gallery/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    GalleryComponent,
    ContactUsComponent,
    FAQSComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
