import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  showPosts: boolean;
  posts: Post[] = [{
    id: '1',
    title: 'Nosso primeiro Post',
    category: 'Tech',
    likes: 123,
    tags: ['tag1', 'tag2', 'tag3'],
    created: "Novembro de 2021",
    info: "A tecnologia vem sendo..."
  },{
    id: '2',
    title: 'Nosso segundo Post',
    category: 'Cloud',
    likes: 321,
    tags: ['tag1', 'tag2', 'tag3'],
    created: "Dezembro de 2021",
    info: "No ano de 2021 cloud fo..."
  },{
    id: '3',
    title: 'Nosso segundo Post',
    category: 'Openshift',
    likes: 456,
    tags: ['tag1', 'tag2', 'tag3'],
    created: "Janeiro de 2022",
    info: "Openshift da RedRat vem sendo o maior..."

  }]

  constructor() {
    this.showPosts = true
   }

  ngOnInit(): void {
  }

}
