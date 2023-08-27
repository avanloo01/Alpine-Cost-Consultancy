import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: any[] = [];
  displayedPosts: any[] = [];
  remainingPosts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts().reverse();
    this.updateDisplayedPosts();
  }

  updateDisplayedPosts(): void {
    this.displayedPosts = this.blogPosts.slice(0, 5);
    this.remainingPosts = this.blogPosts.slice(5);
  }

  loadMore(): void {
    const postsToAdd = this.remainingPosts.splice(0, 5);
    this.displayedPosts = this.displayedPosts.concat(postsToAdd);
  }
}
