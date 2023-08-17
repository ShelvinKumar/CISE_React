//src/articles/articles.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './articles.schema';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Post()
  async createArticle(@Body() article: Article) {
    return this.articlesService.createArticle(article);
  }
}