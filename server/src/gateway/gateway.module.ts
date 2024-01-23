import { Module } from "@nestjs/common";
// import { Websocket } from "./gateway";
import { MyGateway } from "./gateway";
// import { ChatGateway } from "./gateway";
@Module({
    // providers:[ChatGateway]
    providers:[MyGateway]
    // providers:[Websocket]
})


export class GateWayModule{}