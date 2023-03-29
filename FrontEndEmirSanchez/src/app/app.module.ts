import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { InsertEditPersonaComponent } from './components/insert-edit-persona/insert-edit-persona.component';
import { ListPersonaComponent } from './components/list-persona/list-persona.component';
import { SeePersonaComponent } from './components/see-persona/see-persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    InsertEditPersonaComponent,
    ListPersonaComponent,
    SeePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
