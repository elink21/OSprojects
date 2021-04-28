import { Component } from '@angular/core';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post.create.component.scss']
})

export class PostCreateComponent {
  title!: string;
  subtitle!: string;
  content!: string;
  gitURL!: string;


  onAddPost() {
    console.log(this.title);
    this.title = "Something else";
  }

}

