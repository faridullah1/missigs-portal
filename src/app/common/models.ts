export interface Job {
	title: string;
	description: string;
	location: string;
	tags: Tag[];
	selected?: boolean;
}

export interface Tag {
	title: string;
	color: string;
}

export interface SubscriptionType {
	ammount: number;
	type: 'Yearly' | 'Monthly';
	discount: number;
	selected: boolean
}