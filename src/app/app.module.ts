import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { AttrDirectivesComponent } from './components/attr-directives/attr-directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { GenderPipe } from './shared/custom-pipe/gender.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NavComponent } from './components/nav/nav.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { RfComponent } from './components/rf/rf.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { ChangeColorDirective } from './custom-dir/change-color.directive';
import { MyColorComponent } from './components/my-color/my-color.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component'
@NgModule({
    declarations: [
      AppComponent,
      DataBindingComponent,
      DirectivesComponent,
      AttrDirectivesComponent,
      PipesComponent,
      GenderPipe,
      ParentComponent,
      ChildComponent,
      NavComponent,
      AngFormComponent,
      TdfComponent,
      RfComponent,
      PageNotFoundComponent,
      HomePageComponent,
      Comp1Component,
      Comp2Component,
      ChangeColorDirective,
      MyColorComponent,
      LoginComponent,
      FooterComponent,
      
     
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  

