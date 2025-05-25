// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InputTextComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    InputTextComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
