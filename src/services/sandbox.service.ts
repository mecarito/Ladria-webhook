import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class SandboxService {
  client = new MongoClient(process.env.DB_URL);
  dbName = 'sandbox-messages';
  db = this.client.db(this.dbName);

  incommingMessage(): string {
    return 'incomming message!';
  }
  async deliveryReports(data: any) {
    const collection = this.db.collection('delivery-reports');
    const res = collection.insertOne(data);
    return res;
  }
}
