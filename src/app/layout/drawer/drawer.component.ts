import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navigation } from 'src/app/common/navigation';
import { Menu } from '../models';


@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerComponent {
	navigation: Menu[];

    constructor() {
		this.navigation = Navigation.menu;
	}
}
