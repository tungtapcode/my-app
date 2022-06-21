import React from 'react'

export default function TheBanner() {
    return (
        <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold">Xin Chào</h1>
                        <p className="fs-4">React giúp tạo giao diện người dùng tương tác dễ dàng hơn. Thiết kế các khung nhìn đơn giản cho từng trạng thái trong ứng dụng của bạn và React sẽ cập nhật và hiển thị hiệu quả các thành phần phù hợp khi dữ liệu của bạn thay đổi.

                            Chế độ xem so sánh làm cho mã của bạn dễ đoán hơn và dễ gỡ lỗi hơn..</p>
                        <a className="btn btn-primary btn-lg" href="#!">Bắt Đầu</a>
                    </div>
                </div>
            </div>
        </header>

    )
}
