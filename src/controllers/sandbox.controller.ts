import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { SandboxService } from '../services/sandbox.service';
import { Response } from 'express';
import { IncommingMessage, DeliveryReport } from '../types';

@Controller('sandbox')
export class SandboxController {
  constructor(private readonly sandboxService: SandboxService) {}

  @Post('incomming-messages')
  async incommingMessage(
    @Body() message: IncommingMessage,
    @Res() res: Response,
  ) {
    await this.sandboxService.incommingMessage(message);
    res.status(HttpStatus.OK).send();
  }

  @Post('delivery-reports')
  async deliveryReports(@Body() message: DeliveryReport, @Res() res: Response) {
    await this.sandboxService.deliveryReports(message);
    res.status(HttpStatus.OK).send();
  }
}
