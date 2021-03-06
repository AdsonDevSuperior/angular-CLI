import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent},
  { path: 'sobre-mim', component: AboutComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'portifolio', component: PortifolioComponent},
  { path: 'posts', component: PostListComponent},
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
