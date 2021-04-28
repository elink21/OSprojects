import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { AddProjectButtonComponent } from './add-project-button/add-project-button.component';

//Material components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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
    MatIconModule,
    MatInputModule
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
