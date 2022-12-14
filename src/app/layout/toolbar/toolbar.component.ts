import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Navigation } from 'src/app/common/navigation';
import { Menu } from '../models';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
	navigation: Menu[];
	title = 'missigs';
	isOpen = false;

	@Output() signal = new EventEmitter();

  	constructor() {
		this.navigation = Navigation.menu;
	}

	ngOnInit(): void { }

	onLogout(): void {
		console.log('logging out.');
	}

	openSideNav(): void {
		this.isOpen = !this.isOpen;

		this.signal.emit(this.isOpen);
	}
}
