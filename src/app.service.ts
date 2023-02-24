import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'UP!';
  }
  saveResponse(): string {
    return 'saved!';
  }
}
