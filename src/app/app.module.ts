import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageService } from './services/message.service';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectThreeComponent } from './components/projects/project-three/project-three.component';
import { ProjectOneComponent } from './components/projects/project-one/project-one.component';
import { ProjectTwoComponent } from './components/projects/project-two/project-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }