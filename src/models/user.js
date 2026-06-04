class User {
    constructor(
        user_id = null,
        tendangnhap = null,
        matkhau = null,
        vaitro = null,
        email = null,
        cccd = null,
        anh = null,
        ttguimailtk = null,
        gioitinh = null,
        diachi = null,
        hovaten = null,
        ngaysinh = null
    ) {
        this.user_id = user_id;
        this.tendangnhap = tendangnhap;
        this.matkhau = matkhau;
        this.vaitro = vaitro;
        this.email = email;
        this.cccd = cccd;
        this.anh = anh;
        this.ttguimailtk = ttguimailtk;
        this.gioitinh = gioitinh;
        this.diachi = diachi;
        this.hovaten = hovaten;
        this.ngaysinh = ngaysinh;
    }
}

module.exports = User;