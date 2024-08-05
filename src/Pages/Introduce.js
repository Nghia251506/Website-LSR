import ImgIntroduce from '../Image/introduce.jpg'
function Introduce() {
    return (
        <>
            <body className="body">
                <div className="grid wide-introduce">
                    <div className="img-introduce">
                        <img src={ImgIntroduce} alt='ảnh giới thiệu' />
                    </div>
                    <div className='intro-info'>
                        <h1>Về chúng tôi</h1>
                        <span>
                            Đoàn Nghệ thuật múa lân sư rồng Thiếu lâm hồng gia là một trong những nhà cung cấp dịch vụ múa lân chuyên nghiệp & tổ chức sự kiện uy tín hàng đầu trong thị trường hiện nay.
                            Được thành lập từ năm 2007, với hơn 10 năm kinh nghiệm, Thiếu lâm hồng gia luôn cố gắng mang đến
                            những tiết mục nghệ thuật đặc sắc để quảng bá hình ảnh của Quý khách hàng vươn tầm trong nước và quốc tế.
                        </span>
                        <h1>Các hoạt động chính của Đoàn nghệ thuật Múa Lân Sư Rồng Thiếu Lâm Hồng Gia</h1>
                        <span>Ngày càng khẳng định được vị thế của mình trên thị trường, Thiếu Lâm Hồng Gia luôn đa dạng về các dịch vụ tổ chức trong đó gồm 3 hoạt động chính:</span>
                        <ul className='intro-info-list'>
                            <li>
                                Tổ chức sự kiện: Tổ chức hội nghị – hội thảo, tổ chức khai trương khánh thành, hội nghị tri ân khách hàng, ngày kỷ niệm công ty, gala…
                            </li>
                            <li>
                                Dịch vụ múa lân: Biểu diễn Lân Sư Rồng nghệ thuật, múa lân Sư Rồng mừng khai trương, khánh thành, khởi công, động thổ; Biểu diễn múa lân cho lễ hội, cúng tổ, cúng chùa…
                            </li>
                            <li>
                                Cho thuê thiết bị sự kiện: Cho thuê múa Lân Sư Rồng phục vụ các sự kiện, múa lân ngày lễ, ngày tết trung thu
                                Biểu diễn Lân Sư Rồng Nghệ Thuật, thiết bị chuyên nghiệp, cập nhật theo xu thế trong và ngoài nước
                            </li>
                        </ul>
                        <span>
                            Với những điểm độc đáo khác biệt của Đoàn nghệ thuật múa lân sư rồng Thiếu Lâm Hồng Gia như: Trang phục mới lạ, bắt mắt, các tác phẩm nghệ thuật được chuẩn bị công phu, bài bản, sáng tạo đã tạo nên một Thiếu Lâm Hồng Gia riêng và để lại dấu ấn trong lòng khách hàng. Hiện nay Thiếu Lâm Hồng Gia là một trong những đối tác quan trọng của nhiều thương hiệu lớn tại các tỉnh/thành phố khu vực miền Bắc.
                        </span>
                        <div className='row justify-content-space-around'>
                            <div className='col-5 text-center'>
                                <img src={ImgIntroduce} />
                                <span>Thiếu Lâm Hồng Gia biểu diễn múa lân Lễ ra mắt chi nhánh Fuji Fruit Hà Đông</span>
                            </div>
                            <div className='col-5 text-center'>
                                <img src={ImgIntroduce} />
                                <span>Thiếu Lâm Hồng Gia biểu diễn múa lân Lễ ra mắt chi nhánh Fuji Fruit Hà Đông</span>
                            </div>
                            <div className='col-5 text-center'>
                                <img src={ImgIntroduce} />
                                <span>Thiếu Lâm Hồng Gia biểu diễn múa lân Lễ ra mắt chi nhánh Fuji Fruit Hà Đông</span>
                            </div>
                            <div className='col-5 text-center'>
                                <img src={ImgIntroduce} />
                                <span>Thiếu Lâm Hồng Gia biểu diễn múa lân Lễ ra mắt chi nhánh Fuji Fruit Hà Đông</span>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
export default Introduce;