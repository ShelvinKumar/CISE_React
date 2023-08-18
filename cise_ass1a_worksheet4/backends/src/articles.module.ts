//src/articles/articles.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article, ArticleSchema } from './articles.schema';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({useFactory: () => ({uri: 'mongodb+srv://shalvink42:Genesis988@cluster0.lwphzxt.mongodb.net/?retryWrites=true&w=majority',}),}),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [DatabaseService, ArticlesService],
})
export class ArticlesModule {}