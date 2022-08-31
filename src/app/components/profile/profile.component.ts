import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	title = 'Profile';
	theForm: FormGroup;

	constructor() {
		this.theForm = new FormGroup({
			title: new FormControl('Web designer, developer'),
			skills: new FormControl('Reactjs, angular'),
			cities: new FormControl('Lille, Marseille'),
			Rayon: new FormControl('200km'),
			lookingForRemote: new FormControl(false),
		});
	}
}
