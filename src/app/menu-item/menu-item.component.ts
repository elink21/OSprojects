import { Post } from './../models/post.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() project!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
