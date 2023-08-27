import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts = [
    // { id: 1, title: 'First Post', content: 'This is the content of the first post.', date: '20/12/2023' },
    // { id: 2, title: 'Second Post', content: 'This is the content of the second post.', date: '20/12/2023' },
    // { id: 3, title: 'Second Post', content: 'This is the content of the second post.', date: '20/12/2023' },
    // { id: 4, title: 'Second Post', content: 'This is the content of the second post.', date: '20/12/2023' },
    // { id: 5, title: 'Second Post', content: 'This is the content of the second post.', date: '20/12/2023' },
    // { id: 6, title: 'Second Post', content: 'This is the content of the second post.', date: '20/12/2023' },
    // { id: 7, title: 'Second Post', content: 'This is the content of the second post.', date: '20/12/2023' },
    // { id: 8, title: 'Second Post', content: 'This is the content of the second post.', date: '20/12/2023' },
  ];

  getBlogPosts() {
    return this.blogPosts;
  }

  getBlogPostById(id: number) {
    return this.blogPosts.find(post => post.id === id);
  }
}
