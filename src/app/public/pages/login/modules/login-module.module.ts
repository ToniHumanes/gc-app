
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../login.component';
import { GcComponentsModule } from 'src/app/components/gc-components.module';


@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    LoginRoutingModule,
    GcComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule { }
