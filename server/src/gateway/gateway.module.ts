import { Module } from "@nestjs/common";
// import { Websocket } from "./gateway";
import { MyGateway } from "./gateway";

@Module({
    providers:[MyGateway]
    // providers:[Websocket]gtg
})


export class GateWayModule{}