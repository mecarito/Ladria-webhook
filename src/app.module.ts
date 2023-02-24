import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { LiveController } from './controllers/live.controller';
import { SandboxController } from './controllers/sandbox.controller';
import { AppService } from './app.service';
import { LiveService } from './services/live.service';
import { SandboxService } from './services/sandbox.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, LiveController, SandboxController],
  providers: [AppService, LiveService, SandboxService],
})
export class AppModule {}
