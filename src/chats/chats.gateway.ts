import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatsGateway {
    @SubscribeMessage('new_user')
    handleNewUser(
        @MessageBody() username: string,
        @ConnectedSocket() socket: Socket,
    ) {
        // console.log(username);
        // return 'Hello world!';
        socket.emit('hello_user', 'hello ' + username);
        return 'return data';
    }
}
