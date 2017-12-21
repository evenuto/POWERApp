import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { WorkoutTrackComponent } from './workout-track/workout-track.component';
import { FoodComponent } from './food/food.component';
import { LoginService } from './models/login.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    LoginComponent,
    WorkoutTrackComponent,
    FoodComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxTypeaheadModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "login", component: LoginComponent },
      { path: "workout-track", component: WorkoutTrackComponent },
      { path: "food", component: FoodComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
