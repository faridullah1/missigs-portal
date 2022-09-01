import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'main-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
	isOpen = false;

	constructor() { }

	toggleDrawer(ev: boolean): void {
		this.isOpen = ev;
	}
}
