import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SanPhamComponent } from "./san-pham/san-pham.component";
import { DanhSachSanPhamComponent } from "./danh-sach-san-pham/danh-sach-san-pham.component";
import { DemoInputOutputComponent } from "./demo-input-output/demo-input-output.component";
import { BaiTapDatVeComponent } from "./bai-tap-dat-ve/bai-tap-dat-ve.component";
import { VeComponent } from "./ve/ve.component";

@NgModule({
  declarations: [
    SanPhamComponent,
    DanhSachSanPhamComponent,
    DemoInputOutputComponent,
    BaiTapDatVeComponent,
    VeComponent,
  ],
  imports: [CommonModule],
  exports: [DemoInputOutputComponent, BaiTapDatVeComponent],
})
export class TuongTacModule {}
