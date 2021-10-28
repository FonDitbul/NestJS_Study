import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ namespace: 'chattings' })
export class ChatsGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
    private logger = new Logger('chat');

    constructor() {
        this.logger.log('constructor');
    }

    handleConnection(@ConnectedSocket() socket: Socket): any {
        this.logger.log(`connected : ${socket.id} ${socket.nsp.name}`);
    }

    handleDisconnect(@ConnectedSocket() socket: Socket): any {
        this.logger.log(`disconnected : ${socket.id} ${socket.nsp.name}`);
    }

    afterInit(server: any): any {
        this.logger.log('init');
    }

    @SubscribeMessage('new_user')
    handleNewUser(
        @MessageBody() username: string,
        @ConnectedSocket() socket: Socket,
    ) {
        socket.emit('hello_user', 'hello ' + username);
        return 'return data';
    }
}
