import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CommentComponent } from './components/comment/comment.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ChevronDownComponent } from './icons/chevron-down/chevron-down.component';
import { StarComponent } from './icons/star/star.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FaqItemComponent,
    ChevronDownComponent,
    ButtonComponent,
    StarComponent,
    CommentComponent,
  ],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
