import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Barber API')
    .setDescription('The barber API description')
    .setVersion('1.0')
    .addTag('barbers')
    .addTag('services')
    .addTag('users')
    .addTag('auth')
    .addTag('schedules')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'jwt',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/barber-docs', app, document);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders:
      'Access-Control-Allow-Origin, Content-Type, Accept, Authorization, X-Requested-With, Origin',
  });
  await app.listen(3000);
}
bootstrap();
