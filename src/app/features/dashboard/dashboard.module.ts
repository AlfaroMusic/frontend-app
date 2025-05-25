// src/app/features/dashboard/dashboard.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

// Importa los componentes específicos del dashboard
import { DashboardComponent } from './components/dashboard.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { AppLogoComponent } from './components/app-logo/app-logo.component';

// Importa SharedModule para reutilizar componentes comunes (botones, inputs, etc)
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AppLogoComponent,
    SidebarMenuComponent,
    ContentAreaComponent,
    HeaderInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
