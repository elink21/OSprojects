import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, subtitle: string, content: string, gitURL: string, imageURL: string) {
    const post: Post = {
      title: title,
      content: content,
      subtitle: subtitle,
      gitURL: gitURL,
      imageURL: imageURL
    }
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
