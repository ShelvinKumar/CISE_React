import { Model } from 'mongoose';
import { Article } from './articles.schema';
export declare class ArticlesService {
    private articleModel;
    constructor(articleModel: Model<Article>);
    findAll(): Promise<Article[]>;
    createArticle(article: Article): Promise<Article>;
}
