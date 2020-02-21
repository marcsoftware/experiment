import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import { SmallComponent } from './small/small.component';
import { HomeComponent } from './home/home.component';
import { VoiceComponent } from './voice/voice.component';


const appRoutes: Routes = [
  { path: 'type/:subject', component: TypeComponent },
  { path: '', component: HomeComponent },
  { path: 'small/:number/:subject', component: SmallComponent },
  { path: 'voice/:number/:subject', component: VoiceComponent },
  

];


@NgModule({
  declarations: [

    AppComponent,
    TypeComponent,
    SmallComponent,
    HomeComponent,
    VoiceComponent
  ],
  imports: [
    HttpClientModule,
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
