import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketClientModule } from './websockets-client/websocket.client.module';

@Module({
  imports: [WebSocketClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
