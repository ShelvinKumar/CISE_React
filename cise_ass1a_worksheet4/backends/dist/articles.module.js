"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const articles_service_1 = require("./articles.service");
const articles_controller_1 = require("./articles.controller");
const articles_schema_1 = require("./articles.schema");
const database_service_1 = require("./database.service");
let ArticlesModule = exports.ArticlesModule = class ArticlesModule {
};
exports.ArticlesModule = ArticlesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({ useFactory: () => ({ uri: 'mongodb+srv://shalvink42:Genesis988@cluster0.lwphzxt.mongodb.net/?retryWrites=true&w=majority', }), }),
            mongoose_1.MongooseModule.forFeature([{ name: articles_schema_1.Article.name, schema: articles_schema_1.ArticleSchema }]),
        ],
        controllers: [articles_controller_1.ArticlesController],
        providers: [database_service_1.DatabaseService, articles_service_1.ArticlesService],
    })
], ArticlesModule);
//# sourceMappingURL=articles.module.js.map