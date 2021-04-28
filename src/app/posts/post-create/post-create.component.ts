import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post.create.component.scss']
})

export class PostCreateComponent implements OnInit {

  title!: string;
  subtitle!: string;
  content!: string;
  gitURL!: string;
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
      },0);

    this.openFormTL.to(
      '#createPost',
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
      },0);

    this.openFormTL.pause();
  }

  onAddPost() {
    console.log(this.title);
    this.title = "Something else";
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

