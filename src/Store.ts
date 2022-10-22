import { Paypal } from "./Paypal";

export class Store {
  user: any
  paypal: Paypal

  constructor(user: any) {
    this.user = user
    this.paypal = new Paypal()
  }

  purchase(quality: number) {
    this.paypal.pay(this.user, 15 * quality * 100)
  }
}