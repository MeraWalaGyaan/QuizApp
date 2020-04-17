import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { GKComponent } from './gk/gk.component';
import { SMComponent } from './sm/sm.component';
import { SportsComponent } from './sports/sports.component';
import { SnComponent } from './sn/sn.component';
import { CelComponent } from './cel/cel.component';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    GKComponent,
    SMComponent,
    SportsComponent,
    SnComponent,
    CelComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
