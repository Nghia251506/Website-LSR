import Video from '../Video/5570132858149_000.mp4';
import Image from '../Image/z5693873838145_3c75eab3057d606f3381e4962a393c84.jpg'
import Master1 from '../Image/cuong.jpg'
import Master2 from '../Image/dev.jpg'
import Master3 from '../Image/Tien.jpg'
function Home() {
    return (
        <body className="body">
            <div className="grid wide">
                <video src={Video} autoPlay muted loop />
                <div className='body-container'>
                    <h1 className='title'>Đoàn nghệ thuật lân sư rồng Thiếu Lâm Hồng Gia Hà Nội</h1>
                    <div className='grid wide'>
                        <div className='main-info'>
                            <div className='body-imge'>
                                <img src={Image} alt='ảnh giới thiệu' />
                                <h6 className='title-img'>Team múa lân</h6>
                            </div>
                            <div className='body-intro'>
                                <p>Thiếu Lâm Hồng Gia là nhà cung cấp dịch vụ <br />
                                    múa lân chuyên nghiệp & tổ chức sự kiện uy tín <br />
                                    và có thâm niên 10 năm trong thị trường. <br />
                                    Với phương châm Uy Tín – <br />
                                    Chuyên Nghiệp – Trách Nhiệm chúng tôi luôn mang<br />
                                    đến sự hài lòng cho khách hàng của chúng tôi. <br />
                                </p>
                                <button className='btn-info'>Tìm hiểu thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='body-master'>
                    <div className='row justify-content-space-around'>
                        <h1 className='master-title'>Lực lượng nòng cốt của chúng tôi</h1>
                            <div className='master d-flex justify-content-space-around'>
                                <div className='master-info'>
                                    <img src={Master1} alt='avata trưởng đoàn' />
                                    <div>
                                        <h4 className='text-center color-red'>Trưởng đoàn</h4>
                                        <ul className='master-info-list'>
                                            <li>
                                                <span>Họ và tên: Đỗ Mạnh Cường</span>
                                            </li>
                                            <li>
                                                <span>Ngày sinh: 26/11/1993</span>
                                            </li>
                                            <li>
                                                <span>Số điện thoại: 0934649950</span>
                                            </li>
                                            <div className='text-center'>
                                                <a href='tel:0934649950' className='callnow'>Gọi ngay</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='master-info'>
                                    <img src={Master2} alt='avata trưởng đoàn' />
                                    <div>
                                        <h4 className='text-center color-red'>Quản lý Website</h4>
                                        <ul className='master-info-list'>
                                            <li>
                                                <span>Họ và tên: Nguyễn Trọng Nghĩa</span>
                                            </li>
                                            <li>
                                                <span>Ngày sinh: 15/06/2002</span>
                                            </li>
                                            <li>
                                                <span>Số điện thoại: 0862273012</span>
                                            </li>
                                            <div className='text-center'>
                                                <a href='tel:0862273012' className='callnow'>Gọi ngay</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='master-info'>
                                    <img src={Master3} alt='avata trưởng đoàn' />
                                    <div>
                                        <h4 className='text-center color-red'>Phó đoàn</h4>
                                        <ul className='master-info-list'>
                                            <li>
                                                <span>Họ và tên: Phạm Nhật Tiến</span>
                                            </li>
                                            <li>
                                                <span>Ngày sinh: 17/06/2004</span>
                                            </li>
                                            <li>
                                                <span>Số điện thoại: 0344582097</span>
                                            </li>
                                            <div className='text-center'>
                                                <a href='tel:0344582097' className='callnow'>Gọi ngay</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </body>
    );
}
export default Home;