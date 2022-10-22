export class Paypal {
	pay(user: any, amountInCents: number) {
		console.log(`${user} make payment of $${amountInCents} cents with paypal`)
	}
}