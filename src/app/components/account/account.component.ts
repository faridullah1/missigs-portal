import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
	theForm: FormGroup;

	constructor() {
		this.theForm = new FormGroup({
			firstName: new FormControl('Steve'),
			lastName: new FormControl('James'),
			email: new FormControl('James32@gmail.com'),

			oldPassword: new FormControl('pakistan'),
			newPassword: new FormControl('pakistan123'),
			confirmPassword: new FormControl('pakistan123'),
		});
	}

	ngOnInit(): void {
	}
}
