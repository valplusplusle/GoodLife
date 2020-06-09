import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { SportComponent } from './sport/sport.component';
import { ProfileComponent } from './profile/profile.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { BodyfeelComponent } from './bodyfeel/bodyfeel.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    SportComponent,
    ProfileComponent,
    SustainabilityComponent,
    BodyfeelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

