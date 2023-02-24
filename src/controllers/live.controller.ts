import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LiveService } from '../services/live.service';
import { Response } from 'express';

@Controller('live')
export class LiveController {
  constructor(private readonly liveService: LiveService) {}

  @Post('incomming-message')
  incommingMessage(): string {
    return this.liveService.incommingMessage();
  }

  @Post('delivery-reports')
  async deliveryReports(@Body() message: any, @Res() res: Response) {
    await this.liveService.deliveryReports(message);
    res.status(HttpStatus.OK).send();
  }
}
