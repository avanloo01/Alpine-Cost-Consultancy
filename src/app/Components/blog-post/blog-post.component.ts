import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog/blog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: any = {};

  constructor(private route: ActivatedRoute, private blogService: BlogService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const postId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.post = this.blogService.getBlogPostById(postId);

    this.post.content = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
  }
}
