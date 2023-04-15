import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DataSaved } from './data-saved.component'
import { QRCodeModule } from 'angularx-qrcode'

const routes = [
  {
    path: '',
    component: DataSaved,
  },
]

@NgModule({
  declarations: [DataSaved],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), QRCodeModule],
  exports: [DataSaved],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataSavedModule {}
