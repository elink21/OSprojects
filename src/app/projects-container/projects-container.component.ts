import { PostService } from 'src/app/services/posts.service';
import { Post } from './../models/post.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit, OnDestroy {

  constructor(public postService: PostService) { }
  projects: Post[] = [
  ];
  private postsSub!: Subscription;

  ngOnInit(): void {
    this.projects = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdatedListener().
      subscribe((posts: Post[]) => {
        this.projects = posts;

      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }


}
