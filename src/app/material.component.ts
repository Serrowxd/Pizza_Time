import { NgModule } from '@angular/core';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatButtonModule, MatSidenavModule],
  exports: [MatButtonModule, MatSidenavModule],
})
export class MaterialModule {}
