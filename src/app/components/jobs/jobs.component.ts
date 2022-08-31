import { Component } from '@angular/core';
import { Job } from 'src/app/common/models';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
	jobs: Job[] = [];

	constructor() {
		this.jobs = [
			{
				title: 'Full stack developer (Angular /Java /PHP /Symphony)',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				location: 'New York',
				tags: [
					{
						title: 'Angular',
						color: '#1baa63'
					}
				],
				selected: true
			},
			{
				title: 'Full stack developer (Angular /Java /PHP /Symphony)',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				location: 'New York',
				tags: [
					{
						title: 'Angular',
						color: '#1baa63'
					},
					{
						title: 'PHP',
						color: '#731baa'
					},
					{
						title: 'Java',
						color: '#1ba5aa'
					}
				]
			}
		]
	}
}
