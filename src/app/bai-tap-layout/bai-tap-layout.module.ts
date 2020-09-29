import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaiTapLayoutComponent } from "../buoi1/bai-tap-layout/bai-tap-layout.component";
import { BtHeaderComponent } from "../buoi1/bai-tap-layout/bt-header/bt-header.component";
import { CarouselComponent } from "../buoi1/bai-tap-layout/carousel/carousel.component";
import { IndexContentComponent } from "../buoi1/bai-tap-layout/index-content/index-content.component";
import { IndexComponent } from "../buoi1/bai-tap-layout/index/index.component";
import { ItemComponent } from "../buoi1/bai-tap-layout/item/item.component";
import { FooterComponent } from "../buoi1/footer/footer.component";

@NgModule({
  declarations: [
    //nơi quản lý danh mục các component
    BaiTapLayoutComponent,
    BtHeaderComponent,
    CarouselComponent,
    IndexComponent,
    IndexContentComponent,
    ItemComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [BaiTapLayoutComponent], //Xuất component ra cho các module import module này có thể sử dụng
})
export class BaiTapLayoutModule {}
