import axios from "axios";
import React, { useState } from "react";

const AddStudent = () => {
  const initialFormData = {
    hoTen: "",
    ngaySinh: "",
    gioiTinh: false,
    maDinhDanh: "",
    email: "",
    hinhAnh: "",
    tinh: "",
    huyen: "",
    xa: "",
    noiSinh: "",
    thuongTru: "",
    tamTru: "",
    danToc: "",
    tonGiao: "",
    maHs: "",
    lop: "",
    trangThai: true,
    nhapHoc: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
    axios
      .post("http://192.168.234.154:8080/api/hocsinh/add", formData)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="bg-white w-full min-h-screen text-black">
      <h1>Thông tin chung</h1>
      <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen bg-white gap-4">
        <div>
          <img
            className="w-64 h-64 object-cover"
            src="/istockphoto-1300845620-612x612.jpg"
            alt=""
          />
          <label htmlFor="hinhAnh"></label>
          <input
            type="file"
            id="hinhAnh"
            name="hinhAnh"
            value={formData.hinhAnh}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 bg-white"
          />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-10">
            <div>
              <div>
                <label htmlFor="hoTen">Họ tên:</label>
                <input
                  type="text"
                  id="hoTen"
                  name="hoTen"
                  value={formData.hoTen}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="ngaySinh">Ngày sinh:</label>
                <input
                  type="date"
                  id="ngaySinh"
                  name="ngaySinh"
                  value={formData.ngaySinh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="gioiTinh">Giới tính:</label>
                <select
                  id="gioiTinh"
                  name="gioiTinh"
                  value={formData.gioiTinh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
              <div>
                <label htmlFor="maDinhDanh">Mã định danh:</label>
                <input
                  type="text"
                  id="maDinhDanh"
                  name="maDinhDanh"
                  value={formData.maDinhDanh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
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
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="maHs">Mã học sinh:</label>
                <input
                  type="text"
                  id="maHs"
                  name="maHs"
                  value={formData.maHs}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="lop">Tên lớp:</label>
                <input
                  type="text"
                  id="lop"
                  name="lop"
                  value={formData.lop}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="nhapHoc">Ngày nhập học:</label>
                <input
                  type="date"
                  id="nhapHoc"
                  name="nhapHoc"
                  value={formData.nhapHoc}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="tonGiao">Tôn giáo:</label>
                <select
                  id="tonGiao"
                  name="tonGiao"
                  value={formData.tonGiao}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                >
                  <option value="">Chọn tôn giáo</option>
                  <option value="không">Không</option>
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
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                >
                  <option value="">Chọn tỉnh/thành phố</option>
                  <option value="Hà nội">Hà nội</option>
                  {/* Thêm các tùy chọn cho tỉnh/thành phố từ dữ liệu hoặc cứng cố định */}
                </select>
              </div>
              <div>
                <label htmlFor="huyen">Quận/Huyện:</label>
                <select
                  id="huyen"
                  name="huyen"
                  value={formData.huyen}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                >
                  <option value="">Chọn quận/huyện</option>
                  <option value="Cầu Giấy">Cầu Giấy</option>
                  {/* Tùy chọn cho quận/huyện sẽ tự động cập nhật dựa trên tỉnh/thành phố đã chọn */}
                </select>
              </div>
              <div>
                <label htmlFor="xa">Xã/Phường:</label>
                <select
                  id="xa"
                  name="xa"
                  value={formData.xa}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                >
                  <option value="">Chọn xã/phường</option>
                  <option value="Phường 0">Phường 0</option>
                  {/* Tùy chọn cho xã/phường sẽ tự động cập nhật dựa trên quận/huyện đã chọn */}
                </select>
              </div>
              <div>
                <label htmlFor="noiSinh">Nơi sinh:</label>
                <input
                  type="text"
                  id="noiSinh"
                  name="noiSinh"
                  value={formData.noiSinh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="thuongTru">Địa chỉ thường trú:</label>
                <input
                  type="text"
                  id="thuongTru"
                  name="thuongTru"
                  value={formData.thuongTru}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="tamTru">Địa chỉ tạm trú:</label>
                <input
                  type="text"
                  id="tamTru"
                  name="tamTru"
                  value={formData.tamTru}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                />
              </div>
              <div>
                <label htmlFor="danToc">Dân tộc:</label>
                <select
                  id="danToc"
                  name="danToc"
                  value={formData.danToc}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
                >
                  <option value="">Chọn dân tộc</option>
                  <option value="kinh">Kinh</option>
                </select>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
