import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeComponentComponent } from './le-component/le-component.component';
import { AboutComponent } from './about/about.component';

// @ts-ignore
const routes: Routes = [
  {
    path :'home',
    component:LeComponentComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
