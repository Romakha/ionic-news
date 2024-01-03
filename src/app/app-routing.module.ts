import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { ProfilePage } from './page/profile/profile.page';
import { CategoryPage } from './page/category/category.page';
import { MorePage } from './page/more/more.page';
import { AdvertisingPage } from './page/advertising/advertising.page';
import { AboutPage } from './page/about/about.page';
import { TermsPage } from './page/terms/terms.page';
import { ContactsPage } from './page/contacts/contacts.page';




@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'main', component: HomePage},
      {path: 'profile', component: ProfilePage},
      {path: 'category', component: CategoryPage},
      {path: 'more', component: MorePage,},
      {path: 'more/advertising', component: AdvertisingPage},
      {path: 'more/about', component: AboutPage},
      {path: 'more/terms', component: TermsPage},
      {path: 'more/contcts', component: ContactsPage},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
