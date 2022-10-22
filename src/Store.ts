import { Paypal } from "./Paypal";

export class Store {
  paypal: Paypal

  constructor(user: any) {
    this.paypal = new Paypal(user)
  }

  purchase(quality: number) {
    this.paypal.pay(15 * quality)
  }
}