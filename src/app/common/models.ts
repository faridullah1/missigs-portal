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