import { Component } from '@angular/core';
import { SubscriptionType } from 'src/app/common/models';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent {
	title = 'Subscription';
	subscriptionTypes: SubscriptionType[];

	constructor() {
		this.subscriptionTypes = [
			{
				ammount: 21,
				discount: 40,
				type: 'Yearly',
				selected: true
			},
			{
				ammount: 35,
				discount: 0,
				type: 'Monthly',
				selected: false
			}
		];
	}
}
