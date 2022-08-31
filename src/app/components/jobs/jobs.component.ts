import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/common/models';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
	title = 'Jobs list';
	jobs: Job[] = [];

	constructor(private router: Router) {
		this.jobs = [
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
						title: 'React',
						color: '#61dafb'
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

	onViewDetail(job: Job): void {
		this.router.navigate(['jobs', job.title])
	}
}
