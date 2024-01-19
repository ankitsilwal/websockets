import { Injectable, OnModuleInit } from "@nestjs/common";
import { Socket, io } from "socket.io-client";

@Injectable()
export class WebSocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io("http://localhost:3000");
  }

  // onModuleInit() {
  //     this.socketClient.on('connect',()=>{
  //         console.log('connect to gateway')
  //     })
  // }

  onModuleInit() {
    this.registerConsumerEvents();
  }

  private registerConsumerEvents() {
    // this.socketClient.emit('newMessage', {msg:'heyyyy'})
    this.socketClient.on("connect", () => {
      console.log("connected to gateway");
    });
    this.socketClient.on('onMessage',(payload)=>{
        console.log(payload)
    })
  }
}
