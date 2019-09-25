import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import { SmallComponent } from './small/small.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'type/:subject', component: TypeComponent },
  { path: '', component: HomeComponent },
  { path: 'small/:number', component: SmallComponent },

];


@NgModule({
  declarations: [

    AppComponent,
    TypeComponent,
    SmallComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
