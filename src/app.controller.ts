import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import * as amqplib from 'amqplib';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private configService: ConfigService,
    ) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    async onApplicationBootstrap() {
        Logger.error('Ini ceritanya apa hayo hehehehehehe kon', 'OtaknyaError');
        Logger.error('Yahaha wahyu', 'OtaknyaErrorr');

        const queue = this.configService.get<string>('RMQ_QUEUE');
        const conn = await amqplib.connect(
            this.configService.get<string>('RMQ_URL'),
        );

        const channel = await conn.createChannel();
        await channel.assertQueue(queue);

        channel.consume(queue, (msg) => {
            if (msg !== null) {
                Logger.log('Dari RMQ gan: ' + msg.content.toString());

                channel.ack(msg);
            } else {
                Logger.warn('Consumer cancelled by server');
            }
        });
    }
}
