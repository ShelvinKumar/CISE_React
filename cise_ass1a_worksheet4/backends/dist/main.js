"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const articles_module_1 = require("./articles.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(articles_module_1.ArticlesModule);
    const corsOptions = {
        origin: [process.env.FRONTEND_URL],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        optionsSuccessStatus: 204,
    };
    app.enableCors(corsOptions);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map