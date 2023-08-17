import { ArticlesService } from './articles.service';
import { Article } from './articles.schema';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    findAll(): Promise<Article[]>;
    createArticle(article: Article): Promise<Article>;
}
