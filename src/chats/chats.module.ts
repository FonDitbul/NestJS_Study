import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { SocketModule } from '@nestjs/websockets/socket-module';
import { Chatting, ChattingSchema } from './models/chattings.model';
import { SocketSchema, Sockets as SocketModel } from './models/sockets.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Chatting.name, Schema: ChattingSchema },
            { name: SocketModel.name, schema: SocketSchema },
        ]),
    ],
    providers: [ChatsGateway],
})
export class ChatsModule {}
