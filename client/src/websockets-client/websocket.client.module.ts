import { Module } from "@nestjs/common";
import { WebSocketClient } from "./websocket.client";

@Module({
    providers:[WebSocketClient]
})


export class WebSocketClientModule{}