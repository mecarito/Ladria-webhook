import { Injectable } from '@nestjs/common';
import AfricasTalking from 'africastalking';
import { MongoClient } from 'mongodb';

@Injectable()
export class AppService {
  client = new MongoClient(process.env.DB_URL);
  dbName = 'messages';
  db = this.client.db(this.dbName);

  getStatus(): string {
    return 'UP!';
  }
  async sendMessage(input) {
    // const africastalking = AfricasTalking({
    //   apiKey: process.env.AT_API_KEY,
    //   username: process.env.AT_USERNAME,
    // });
    // try {
    //   console.log('input', input);
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   //@ts-ignore
    //   const result = await africastalking.SMS.send({
    //     to: input.to,
    //     message: input.message,
    //     from: 93571,
    //   });
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }

    await this.client.connect();
    console.log('Connected successfully to server');
    const collection = this.db.collection('documents');
    return input;
  }

  incommingMessage(): string {
    return 'incomming message!';
  }
  async deliveryReports(data: any) {
    await this.client.connect();
    console.log('Connected successfully to server');
    const collection = this.db.collection('deliveryReports');
    const res = collection.insertOne(data);
    return res;
  }
}
