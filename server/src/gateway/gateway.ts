import { OnModuleInit } from "@nestjs/common";
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
@WebSocketGateway()
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on("connection", (socket) => {
      console.log(socket.id);
      console.log('connected')
    });
  }

  @SubscribeMessage("newMessage")
  onNewMessage(@MessageBody() body: any) {
    console.log(body);
    this.server.emit(`onMessage`,{
        msg:'new message',
        content:body
    })
  }
}



// src/chat/chat.gateway.ts
// import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
// import { Server } from 'socket.io';

// @WebSocketGateway()
// export class ChatGateway {
//   @WebSocketServer() server: Server;

//   @SubscribeMessage('message')
//   handleMessage(client: any, payload: any): void {
//     this.server.emit('message', payload);
//   }
// }
