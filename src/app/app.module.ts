import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddProjectButtonComponent } from './add-project-button/add-project-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    MenuItemComponent,
    ProjectsContainerComponent,
    AddProjectButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MenuItemComponent,
    ProjectsContainerComponent,
    AddProjectButtonComponent,
  ]
})
export class AppModule { }
