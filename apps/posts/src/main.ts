import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostsModule,
    { transport: Transport.TCP, options: { port: 4002 } },
  );
  await app.listen();
}
bootstrap();
