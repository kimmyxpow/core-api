import { Controller, Get, Logger } from '@nestjs/common'
import { AppService } from './app.service'
import * as amqplib from 'amqplib'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    async onApplicationBootstrap() {
        Logger.error("Ini ceritanya apa hayo hehehehehehe kon", 'OtaknyaError')
        Logger.error("Yahaha wahyu", 'OtaknyaError')

        const queue = 'wiksmart'
        const conn = await amqplib.connect('amqp://smkwikramabogor:qwerty@rmq2.pptik.id:5672//smkwikramabogor')

        const channel = await conn.createChannel()
        await channel.assertQueue(queue)

        channel.consume(queue, (msg) => {
            if (msg !== null) {
                Logger.log('Dari RMQ gan: ' + msg.content.toString())
                channel.ack(msg)
            } else {
                Logger.warn('Consumer cancelled by server')
            }
        })

    }
}
