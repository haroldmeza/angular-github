import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './routes/app-routing-module';
import { AppComponent } from './app.component';
import { SearchPage } from './pages/search/search.page';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';
import { UserComponent } from './components/user/user.component';
import { UserPageComponent } from './pages/user.page/user.page.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPage,
    SearchComponent,
    LoadingComponent,
    AlertComponent,
    UserComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
