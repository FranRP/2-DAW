import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CabeceraEnlacesComponent } from './cabecera-enlaces/cabecera-enlaces.component';
import { CabeceraMenuComponent } from './cabecera-menu/cabecera-menu.component';
import { CabeceraDesplegarMenuComponent } from './cabecera-desplegar-menu/cabecera-desplegar-menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PjinfoComponent } from './pjinfo/pjinfo.component';
import { ComicsComponent } from './comics/comics.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ComicsrepetidosPipe } from './comicsrepetidos.pipe';
import { BuscarcomicPipe } from './buscarcomic.pipe';
import { SettingsComponent } from './settings/settings.component';


// const routes = [
//   {'path': '', component: 'HomepageComponent'},
//   {'path': 'homepage', component: 'HomepageComponent'},
// ]

const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'homepage', component: HomepageComponent},
  { path:'events', component: ContenidoComponent},
  { path:'characters', component: PersonajesComponent},
  { path:'pjinfo', component: PjinfoComponent},
  { path:'comics', component: ComicsComponent},
  { path: '**', component: HomepageComponent }
]

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CabeceraEnlacesComponent,
    CabeceraMenuComponent,
    CabeceraDesplegarMenuComponent,
    ContenidoComponent,
    HomepageComponent,
    FooterComponent,
    PersonajesComponent,
    PjinfoComponent,
    ComicsComponent,
    ComicsrepetidosPipe,
    BuscarcomicPipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes)
    routing
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
