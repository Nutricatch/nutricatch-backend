import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogService: BlogsService) {}

  @Get()
  async getBlogs() {
    const blogData = await this.blogService.getBlogs();
    return blogData;
  }

  @Get(':id')
  async getBlogById(@Param('id') id: number) {
    const blog = await this.blogService.getBlogById(id);
    if (!blog) {
      throw new NotFoundException(`Blog in Id '${id}' not found`);
    }
    return blog;
  }
}
