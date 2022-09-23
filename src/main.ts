import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3400;
  app.enableCors();
  await app.listen(PORT);


  console.log("\x1b[33m%s\x1b[0m", "\n\t >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<"); // yellow text
  console.log(`\t >> Server listening on port ${PORT} <<`);
  console.log(`\t >> Visit App here : http://localhost:3400/events <<`);
  console.log("\x1b[33m%s\x1b[0m", "\t >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<< \n"); // yellow text
}
bootstrap();
