import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectOneComponent } from './components/projects/project-one/project-one.component';
import { ProjectTwoComponent } from './components/projects/project-two/project-two.component';
import { ProjectThreeComponent } from './components/projects/project-three/project-three.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      children: [
        {
          path: '',
          redirectTo: 'project-one',
          pathMatch: 'full'
        },
        {
          path: 'project-one',
          component: ProjectOneComponent
        },
        {
          path: 'project-two',
          component: ProjectTwoComponent
        },
        {
          path: 'project-three',
          component: ProjectThreeComponent
        },
        {
          path: '**',
          redirectTo: 'project-one'
        }
      ]
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: '**',
      redirectTo: 'home'
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
