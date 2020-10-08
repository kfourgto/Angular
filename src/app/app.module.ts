import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BaiTapLayoutModule } from "./bai-tap-layout/bai-tap-layout.module";

import { AppComponent } from "./app.component";
import { DemoDirectiveModule } from "./demo-directive/demo-directive.module";
import { TuongTacModule } from "./tuong-tac/tuong-tac.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    // Các component sử dụng (lẫn nhau) trong module này
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DemoDirectiveModule,
    TuongTacModule,
    BrowserAnimationsModule,
    MaterialModule,
    // Nơi để import các module khác vào module này
  ],
  providers: [],
  bootstrap: [AppComponent], //Nơi chứa component sử dụng trong index.html
})
export class AppModule {}
