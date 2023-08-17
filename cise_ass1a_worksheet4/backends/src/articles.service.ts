//src/articles/articles.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './articles.schema';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  //async createArticle(createArticleDto: CreateArticleDto) {
    //const createdArticle = new this.articleModel(createArticleDto);
    //return createdArticle.save();
  //}

  async createArticle(article: Article): Promise<Article> {
    const newArticle = new this.articleModel(Article);
    return newArticle.save();
    }

}