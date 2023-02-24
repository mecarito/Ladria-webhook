import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LiveService } from '../services/live.service';
import { Response } from 'express';
import { IncommingMessage, DeliveryReport } from '../types';

@Controller('live')
export class LiveController {
  constructor(private readonly liveService: LiveService) {}

  @Post('incoming-messages')
  async incommingMessage(
    @Body() message: IncommingMessage,
    @Res() res: Response,
  ) {
    await this.liveService.incommingMessage(message);
    res.status(HttpStatus.OK).send();
  }

  @Post('delivery-reports')
  async deliveryReports(@Body() message: DeliveryReport, @Res() res: Response) {
    await this.liveService.deliveryReports(message);
    res.status(HttpStatus.OK).send();
  }
}
