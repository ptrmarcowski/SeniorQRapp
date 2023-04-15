import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DeliveryData } from './delivery-data.component'

const routes = [
  {
    path: '',
    component: DeliveryData,
  },
]

@NgModule({
  declarations: [DeliveryData],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DeliveryData],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeliveryDataModule {}
