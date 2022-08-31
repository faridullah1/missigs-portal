import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { AccountComponent } from './components/account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JobDetailComponent } from './components/jobs/detail/detail.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', redirectTo: 'account', pathMatch: 'prefix' },
			{ path: 'jobs', component: JobsComponent },
			{ path: 'jobs/:name', component: JobDetailComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'subscriptions', component: SubscriptionsComponent },
			{ path: 'account', component: AccountComponent },
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: 'account', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
