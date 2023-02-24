export interface DeliveryReport {
  id: string;
  status: string;
  phoneNumber: string;
  networkCode: string;
  failureReason?: string;
  retryCount: number;
}

export interface IncommingMessage {
  date: string;
  from: string;
  id: string;
  linkId?: string;
  text: string;
  to: string;
  networkCode: string;
}
