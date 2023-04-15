import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Profile } from './profile.component'
import { HttpClientModule } from '@angular/common/http'
import { MainService } from '../../services/mainService.service'
import { QRCodeModule } from 'angularx-qrcode';

const routes = [
    {
        path: '',
        component: Profile,
    },
]

@NgModule({
    declarations: [Profile],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), HttpClientModule, QRCodeModule],
    exports: [Profile],
    providers: [MainService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule { }
