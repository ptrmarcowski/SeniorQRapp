import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DeliveryConfirmed } from './delivery-confirmed.component'
import { QRCodeModule } from 'angularx-qrcode'

const routes = [
  {
    path: '',
    component: DeliveryConfirmed,
  },
]

@NgModule({
  declarations: [DeliveryConfirmed],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), QRCodeModule],
  exports: [DeliveryConfirmed],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeliveryConfirmedModule {}
