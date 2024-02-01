import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MissionComponent } from './components/home-sections/mission/mission.component';
import { CoreValuesComponent } from './components/home-sections/core-values/core-values.component';
import { ServicesComponent } from './components/home-sections/services/services.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MissionComponent,
    CoreValuesComponent,
    ServicesComponent
  ],
  imports: [],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MissionComponent,
    CoreValuesComponent,
    ServicesComponent
  ]
})
export class SharedModule {}