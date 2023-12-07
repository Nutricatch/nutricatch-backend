import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class BlogsService {
  async getBlogs(): Promise<any> {
    const blogFilePath = 'public/blogs.json';
    try {
      const rawData = fs.readFileSync(blogFilePath, 'utf8');
      const blogsData = JSON.parse(rawData);
      return blogsData;
    } catch (error) {
      throw new Error(
        `Terjadi kesalahan saat membaca file JSON: ${error.message}`,
      );
    }
  }
}
