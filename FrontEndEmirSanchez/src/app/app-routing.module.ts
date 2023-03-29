import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertEditPersonaComponent } from './components/insert-edit-persona/insert-edit-persona.component';
import { ListPersonaComponent } from './components/list-persona/list-persona.component';
import { SeePersonaComponent } from './components/see-persona/see-persona.component';


const routes: Routes = [
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'personas', component: ListPersonaComponent },
  { path: 'agregar', component:  InsertEditPersonaComponent},
  { path: 'ver/:id', component:  SeePersonaComponent},
  { path: '**', redirectTo: 'personas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
