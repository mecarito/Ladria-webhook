import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { SandboxService } from '../services/sandbox.service';
import { Response } from 'express';

@Controller('sandbox')
export class SandboxController {
  constructor(private readonly sandboxService: SandboxService) {}

  @Post('incomming-message')
  incommingMessage(): string {
    return this.sandboxService.incommingMessage();
  }

  @Post('delivery-reports')
  async deliveryReports(@Body() message: any, @Res() res: Response) {
    await this.sandboxService.deliveryReports(message);
    res.status(HttpStatus.OK).send();
  }
}
