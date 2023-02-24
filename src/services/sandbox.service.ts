import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { IncommingMessage, DeliveryReport } from '../types';

@Injectable()
export class SandboxService {
  client = new MongoClient(process.env.DB_URL);
  dbName = 'sandbox-messages';
  db = this.client.db(this.dbName);

  async incommingMessage(message: IncommingMessage) {
    const collection = this.db.collection('incomming-messages');
    return await collection.insertOne(message);
  }
  async deliveryReports(message: DeliveryReport) {
    const collection = this.db.collection('delivery-reports');
    return await collection.insertOne(message);
  }
}
