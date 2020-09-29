import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BaiTapLayoutModule } from "./bai-tap-layout/bai-tap-layout.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    // Các component sử dụng (lẫn nhau) trong module này
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule, // Nơi để import các module khác vào module này
  ],
  providers: [],
  bootstrap: [AppComponent], //Nơi chứa component sử dụng trong index.html
})
export class AppModule {}
