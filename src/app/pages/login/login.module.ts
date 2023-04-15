import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Login } from './login.component'
import { MainService } from '../../services/mainService.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

const routes = [
    {
        path: '',
        component: Login,
    },
]

@NgModule({
    declarations: [Login],
    imports: [
        CommonModule, 
        ComponentsModule, 
        RouterModule.forChild(routes), 
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [Login],
    providers: [MainService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule { }
