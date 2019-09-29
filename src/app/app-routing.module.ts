import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../app/components/homepage/homepage.component'
import { GalleryComponent } from '../app/components/gallery/gallery.component'
import { FAQSComponent } from '../app/components/faqs/faqs.component'
import { ContactUsComponent } from '../app/components/contact-us/contact-us.component'
import { ProductDetailComponent } from '../app/components/gallery/product-detail/product-detail.component'



const routes: Routes = [ 
  { path: '', component: HomepageComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'FAQS', component: FAQSComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: "Gallery/product-detail", component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
