import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMessageBody } from './typings';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(): string {
    return this.appService.getStatus();
  }

  // @Post('send-message')
  // sendMessage(@Body() body: SendMessageBody) {
  //   return this.appService.sendMessage(body);
  // }

  @Post('incomming-message')
  incommingMessage(): string {
    return this.appService.incommingMessage();
  }

  @Post('delivery-reports')
  async deliveryReports(@Body() message: any, @Res() res: Response) {
    await this.appService.deliveryReports(message);
    res.status(HttpStatus.OK).send();
  }
}
