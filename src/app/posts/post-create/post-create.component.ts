import { Post } from './../../models/post.model';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/posts.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post.create.component.scss']
})

export class PostCreateComponent implements OnInit {

  //Emitters

  openButtonPressed = false;
  openFormTL = gsap.timeline();


  @ViewChild('createPostContainer') container!: ElementRef;

  ngOnInit(): void {

    this.openFormTL.from("#createPost", {
      x: 600,
    });



    this.openFormTL.to('#greenScreen',
      {
        visibility: 'visible',
        opacity: 1,
        duration: 0.2,
      }, 0);

    this.openFormTL.to(
      '#createPost',
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
      }, 0);

    this.openFormTL.pause();
  }

  constructor(public postService:PostService){

  }

  onAddPost(form: NgForm) {
    this.postService.addPost(form.value.title,form.value.subtitle,
       form.value.content,form.value.gitURL,form.value.imageURL);
  }

  animate() {
    this.openButtonPressed = !this.openButtonPressed;
    if (this.openButtonPressed) {
      console.log("animation");
      this.openFormTL.play();
    }
    else {
      this.openFormTL.reverse();
    }
  }

}

