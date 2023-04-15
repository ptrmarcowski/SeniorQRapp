import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ProfileDoc } from './profile-doc.component'

const routes = [
  {
    path: '',
    component: ProfileDoc,
  },
]

@NgModule({
  declarations: [ProfileDoc],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ProfileDoc],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileDocModule {}
