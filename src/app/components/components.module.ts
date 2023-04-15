import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { CodeQrScan } from './code-qr-scan/code-qr-scan.component'
import { PopupOne } from './popup-one/popup-one.component'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
    declarations: [
        CodeQrScan,
        PopupOne,
        NavbarComponent
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        CodeQrScan,
        PopupOne,
        NavbarComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
