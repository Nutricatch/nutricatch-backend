import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class BlogsService {
  private readonly blogFilePath = 'public/blogs.json';

  private getBlogsData(): any[] {
    const rawData = fs.readFileSync(this.blogFilePath, 'utf8');
    const parsedData = JSON.parse(rawData);
    return parsedData;
  }

  getBlogs(): any[] {
    return this.getBlogsData();
  }

  getBlogById(id: number): any {
    const blogs = this.getBlogsData();
    const blog = blogs.find((blog) => blog.id === id);

    if (!blog) {
      throw new NotFoundException(`Blog in Id '${id}' not found`);
    }

    return blog;
  }
}
