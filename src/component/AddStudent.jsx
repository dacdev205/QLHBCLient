// AddStudent.jsx

import React, { useState } from "react";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    hoten: "",
    ngaysinh: "",
    gioitinh: false,
    cccd: "",
    email: "",
    hinhanh: "",
    tinh: "",
    huyen: "",
    xa: "",
    noisinh: "",
    thuongtru: "",
    tamtru: "",
    dantoc: "",
    tongiao: "",
    mahs: "",
    tenlop: "",
    khoi: "",
    trangthai: true,
    nhaphoc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu formData đi đâu đó (ví dụ: gọi API để lưu dữ liệu)
    console.log(formData);
    // Reset form
    setFormData({
      hoten: "",
      ngaysinh: "",
      gioitinh: false,
      cccd: "",
      email: "",
      hinhanh: "",
      tinh: "",
      huyen: "",
      xa: "",
      noisinh: "",
      thuongtru: "",
      tamtru: "",
      dantoc: "",
      tongiao: "",
      mahs: "",
      tenlop: "",
      khoi: "",
      trangthai: true,
      nhaphoc: "",
    });
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <h1>Thông tin chung</h1>
      <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen bg-white gap-4">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          {/* Cột upload hình */}
          <h1 className="text-xl font-bold mb-2 text-black">Upload hình</h1>
          {/* Thêm input để upload hình ở đây */}
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          {/* Hai cột nhập thông tin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-10">
            <div>
              <div>
                <label htmlFor="hoten">Họ tên:</label>
                <input
                  type="text"
                  id="hoten"
                  name="hoten"
                  value={formData.hoten}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="ngaysinh">Ngày sinh:</label>
                <input
                  type="date"
                  id="ngaysinh"
                  name="ngaysinh"
                  value={formData.ngaysinh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="gioitinh">Giới tính:</label>
                <select
                  id="gioitinh"
                  name="gioitinh"
                  value={formData.gioitinh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
              <div>
                <label htmlFor="khoi">Khối:</label>
                <select
                  id="khoi"
                  name="khoi"
                  value={formData.khoi}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value={true}>1</option>
                  <option value={false}>2</option>
                </select>
              </div>
              <div>
                <label htmlFor="cccd">CCCD:</label>
                <input
                  type="text"
                  id="cccd"
                  name="cccd"
                  value={formData.cccd}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="mahs">Mã học sinh:</label>
                <input
                  type="text"
                  id="mahs"
                  name="mahs"
                  value={formData.mahs}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="tongiao">Tôn giáo:</label>
                <select
                  id="tongiao"
                  name="tongiao"
                  value={formData.tongiao}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value="">Chọn tôn giáo</option>
                  {/* Thêm các tùy chọn cho tôn giáo từ dữ liệu hoặc cứng cố định */}
                </select>
              </div>
              <div>
                <label htmlFor="tinh">Tỉnh/Thành phố:</label>
                <select
                  id="tinh"
                  name="tinh"
                  value={formData.tinh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value="">Chọn tỉnh/thành phố</option>
                  {/* Thêm các tùy chọn cho tỉnh/thành phố từ dữ liệu hoặc cứng cố định */}
                </select>
              </div>

              {/* Quận/Huyện */}
              <div>
                <label htmlFor="huyen">Quận/Huyện:</label>
                <select
                  id="huyen"
                  name="huyen"
                  value={formData.huyen}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value="">Chọn quận/huyện</option>
                  {/* Tùy chọn cho quận/huyện sẽ tự động cập nhật dựa trên tỉnh/thành phố đã chọn */}
                </select>
              </div>

              {/* Xã/Phường */}
              <div>
                <label htmlFor="xa">Xã/Phường:</label>
                <select
                  id="xa"
                  name="xa"
                  value={formData.xa}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value="">Chọn xã/phường</option>
                  {/* Tùy chọn cho xã/phường sẽ tự động cập nhật dựa trên quận/huyện đã chọn */}
                </select>
              </div>

              {/* Nơi sinh */}
              <div>
                <label htmlFor="noisinh">Nơi sinh:</label>
                <select
                  id="noisinh"
                  name="noisinh"
                  value={formData.noisinh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value="">Chọn nơi sinh</option>
                  {/* Tùy chọn cho nơi sinh từ dữ liệu hoặc cứng cố định */}
                </select>
              </div>

              {/* Địa chỉ thường trú */}
              <div>
                <label htmlFor="thuongtru">Địa chỉ thường trú:</label>
                <input
                  type="text"
                  id="thuongtru"
                  name="thuongtru"
                  value={formData.thuongtru}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>

              {/* Địa chỉ tạm trú */}
              <div>
                <label htmlFor="tamtru">Địa chỉ tạm trú:</label>
                <input
                  type="text"
                  id="tamtru"
                  name="tamtru"
                  value={formData.tamtru}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>

              {/* Dân tộc */}
              <div>
                <label htmlFor="dantoc">Dân tộc:</label>
                <select
                  id="dantoc"
                  name="dantoc"
                  value={formData.dantoc}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option value="">Chọn dân tộc</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
