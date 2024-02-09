import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { MyColorComponent } from './components/my-color/my-color.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RfComponent } from './components/rf/rf.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent }, //default routing
  { path: 'login', component: LoginComponent },
  {
    path: 'databinding',
    component: DataBindingComponent,
    canActivate: [AuthGuard],
  }, //named rauting
  {
    path: 'directives',
    component: DirectivesComponent,
    canActivate: [AuthGuard],
  },
  //{path:"directives", redirectTo:"pipe", pathMatch:"full"}, //redirect routing
  { path: 'parent', component: ParentComponent, canActivate: [AuthGuard] },
  { path: 'pipe', component: PipesComponent, canActivate: [AuthGuard] },
  { path: 'pipe/:id', component: PipesComponent, canActivate: [AuthGuard] }, //parameterized routing
  { path: 'comp2', component: Comp2Component, canActivate: [AuthGuard] },
  { path: 'mycolor', component: MyColorComponent, canActivate: [AuthGuard] },

  {
    path: 'crud',
    canActivate: [AuthGuard],
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule),
  },

  // child routing
  {
    path: 'ang-form',
    component: AngFormComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TdfComponent },
      { path: 'tdf', component: TdfComponent },
      { path: 'rf', component: RfComponent },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
