import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit {
  projectNumber=[1,2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit(): void {
  }

}
