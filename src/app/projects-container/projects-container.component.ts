import { Post } from './../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit {
  projects = [{
    title: "Aws rekognition 📷",
    subtitle: "Usando JS and Amazon Web Services",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Aws rekognition 2",
    subtitle: "Usando JS and Amazon Web Services",
    description: "Lorem ipsum dolor sit amet",
  },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
