import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from './database.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DatabaseModule,
    { transport: Transport.TCP, options: { port: 4000 } },
  );
  await app.listen();
}
bootstrap();
