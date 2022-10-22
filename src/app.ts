import { PaypalPaymentProcessor } from "./PaypalPaymentProcessor";
import { Store } from "./Store";
import { StripePaymentProcessor } from "./StripePaymentProcessor";

const store = new Store(new StripePaymentProcessor('John'))
store.purchase(10)

const store2 = new Store(new PaypalPaymentProcessor('Si Thu'))
store2.purchase(10)