import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  app.enableCors();

  const options = new DocumentBuilder()
      .setTitle('NestJS / Docker API')
      .setDescription('A NestJS/Docker API exercice')
      .setVersion('1.0.0')
      .addTag('NestJS-API')
      .build();

  const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

  await app.listen(PORT);


  console.log("\x1b[33m%s\x1b[0m", "\n\t >>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<"); // yellow text
  console.log(`\t >> Server listening on port ${PORT} <<`);
  console.log(`\t >> Visit App here :    http://localhost:3000/users <<`);
  console.log(`\t >> API Documentation : http://localhost:3000/api   <<`);
  console.log("\x1b[33m%s\x1b[0m", "\t >>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<< \n"); // yellow text
}
bootstrap();
