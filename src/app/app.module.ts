import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { OnlyLoggedInUsersGuard } from './guards/only-logged-users.guard'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

type PathMatch = "full" | "prefix" | undefined;

const routes = [
    {
        path: '',
        pathMatch: 'full' as PathMatch,
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'register',
        loadChildren: () =>
            import('./pages/register/register.module').then((m) => m.RegisterModule),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'form',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form1/form1.module').then((m) => m.FormModule),
    },
    {
        path: 'form2',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form2/form2.module').then((m) => m.FormModule),
    },
    {
        path: 'form3',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form3/form3.module').then((m) => m.FormModule),
    },
    {
        path: 'form4',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form4/form4.module').then((m) => m.FormModule),
    },
    {
        path: 'form5',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form5/form5.module').then((m) => m.FormModule),
    },
    {
        path: 'form6',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form6/form6.module').then((m) => m.FormModule),
    },
    {
        path: 'form7',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form7/form7.module').then((m) => m.FormModule),
    },
    {
        path: 'form8',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form8/form8.module').then((m) => m.FormModule),
    },
    {
        path: 'form9',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form9/form9.module').then((m) => m.FormModule),
    },
    {
        path: 'form10',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form10/form10.module').then((m) => m.FormModule),
    },
    {
        path: 'form11',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form11/form11.module').then((m) => m.FormModule),
    },
    {
        path: 'form12',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form12/form12.module').then((m) => m.FormModule),
    },
    {
        path: 'form13',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form13/form13.module').then((m) => m.FormModule),
    },
    {
        path: 'form14',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form14/form14.module').then((m) => m.FormModule),
    },
    {
        path: 'form15',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form15/form15.module').then((m) => m.FormModule),
    },
    {
        path: 'form16',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form16/form16.module').then((m) => m.FormModule),
    },
    {
        path: 'form17',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form17/form17.module').then((m) => m.FormModule),
    },
    {
        path: 'form18',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form18/form18.module').then((m) => m.FormModule),
    },
    {
        path: 'form19',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form19/form19.module').then((m) => m.FormModule),
    },
    {
        path: 'form20',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form20/form20.module').then((m) => m.FormModule),
    },
    {
        path: 'form21',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form21/form21.module').then((m) => m.FormModule),
    },
    {
        path: 'form22',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form22/form22.module').then((m) => m.FormModule),
    },
    {
        path: 'form23',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form23/form23.module').then((m) => m.FormModule),
    },
    {
        path: 'form24',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form24/form24.module').then((m) => m.FormModule),
    },
    {
        path: 'form1',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/form/form.module').then((m) => m.FormModule),
    },
    {
        path: 'metki',
        loadChildren: () =>
            import('./pages/metki/metki.module').then((m) => m.HomeModule),
    },
    {
        path: 'profile',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    },
    {
        path: 'userInfo',
        loadChildren: () =>
            import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    },
    /* DEPRACATED
    {
        path: 'profile-doc',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
            import('./pages/profile-doc/profile-doc.module').then(
                (m) => m.ProfileDocModule
            ),
    },*/
    {
        path: 'form-saved',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
        import('./pages/data-saved/data-saved.module').then(
            (m) => m.DataSavedModule
        ),
    },
    {
        path: 'delivery-form',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
        import('./pages/delivery-data/delivery-data.module').then(
            (m) => m.DeliveryDataModule
        ),
    },
    {
        path: 'delivery-confirmed',
        canLoad: [OnlyLoggedInUsersGuard],
        loadChildren: () =>
        import('./pages/delivery-confirmed/delivery-confirmed.module').then(
            (m) => m.DeliveryConfirmedModule
        ),
    },
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, 
        RouterModule.forRoot(routes), 
        ComponentsModule, 
        HttpClientModule,
        FormsModule,
    ],
    providers: [OnlyLoggedInUsersGuard],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }