import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StructuralComponent } from "./structural/structural.component";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [StructuralComponent, UserComponent],
  imports: [CommonModule],
  exports: [StructuralComponent],
})
export class DemoDirectiveModule {}
