import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Form } from './form.component'
import { MainService } from '../../services/mainService.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes = [
    {
        path: '',
        component: Form,
    },
]

@NgModule({
    declarations: [Form],
    imports: [
        CommonModule, 
        ComponentsModule, 
        RouterModule.forChild(routes), 
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [Form],
    providers: [MainService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormModule { }
