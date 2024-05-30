import axios from "axios";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

const AddStudent = () => {
  const [ethnic, setEthnic] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [commune, setCommune] = useState([]);
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [isDistrictSelected, setIsDistrictSelected] = useState(false);
  const initialFormData = {
    hoTen: "",
    ngaySinh: "",
    gioiTinh: "",
    maDinhDanh: "",
    email: "",
    hinhAnh: null,
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
    trangThai: "",
    nhapHoc: "",
  };

  useEffect(() => {
    fetch("https://api.nosomovo.xyz/ethnic/getalllist")
      .then((res) => res.json())
      .then((data) => {
        setEthnic(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.nosomovo.xyz/province/getalllist/193")
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
      });
  }, []);

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });

    if (name === "tinh") {
      const cityName = value;
      try {
        const res = await fetch(
          `https://api.nosomovo.xyz/district/getalllist/${
            city.find((item) => item.name === cityName).id
          }`
        );
        const data = await res.json();
        setDistrict(data);
        setCommune([]); // Clear the commune when city is changed
        setIsCitySelected(true);
        setIsDistrictSelected(false);
      } catch (error) {
        console.error("Error fetching districts", error);
      }
    }

    if (name === "huyen") {
      const districtName = value;
      try {
        const res = await fetch(
          `https://api.nosomovo.xyz/commune/getalllist/${
            district.find((item) => item.name === districtName).id
          }`
        );
        const data = await res.json();
        setCommune(data);
        setIsDistrictSelected(true);
      } catch (error) {
        console.error("Error fetching communes", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.234.154:8080/api/hocsinh/add", formData)
      .then(() => {
        setFormData(initialFormData);
      });
  };

  return (
    <div className="bg-white w-full min-h-screen text-black">
      <h1>Thông tin chung</h1>
      <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 min-h-screen bg-white gap-4">
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-10">
            <div>
              <div className="mb-2">
                <TextField
                  className="w-full"
                  size="small"
                  type="text"
                  id="outlined-basic"
                  name="hoTen"
                  label="Họ và tên"
                  variant="outlined"
                  value={formData.hoTen}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <TextField
                  className="w-full"
                  size="small"
                  type="text"
                  id="outlined-basic"
                  name="lop"
                  value={formData.lop}
                  onChange={handleChange}
                  label="Lớp"
                  variant="outlined"
                />
              </div>

              <div className="mb-2">
                <Box sx={{ minWidth: 120 }} className="mb-2">
                  <FormControl fullWidth size="small">
                    <InputLabel
                      id="demo-simple-select-label"
                      className="w-full"
                    >
                      Giới tính
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Giới tính"
                      value={formData.gioiTinh}
                      onChange={handleChange}
                      name="gioiTinh"
                    >
                      <MenuItem value="null">Giới tính</MenuItem>
                      <MenuItem value="true">Nam</MenuItem>
                      <MenuItem value="false">Nữ</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div className="mb-2">
                  <TextField
                    className="w-full"
                    size="small"
                    type="text"
                    id="outlined-basic"
                    name="maHs"
                    value={formData.maHs}
                    onChange={handleChange}
                    label="Mã học sinh"
                    variant="outlined"
                  />
                </div>

                <div className="mb-2">
                  <TextField
                    className="w-full"
                    size="small"
                    type="text"
                    id="outlined-basic"
                    name="maDinhDanh"
                    label="Mã Định Danh"
                    value={formData.maDinhDanh}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>

                <Box sx={{ minWidth: 120 }} className="mb-2">
                  <FormControl fullWidth size="small">
                    <InputLabel
                      id="demo-simple-select-label"
                      className="w-full"
                    >
                      Trạng thái
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Trạng thái"
                      value={formData.trangThai}
                      onChange={handleChange}
                      name="trangThai"
                    >
                      <MenuItem value="null">Trạng thái</MenuItem>
                      <MenuItem value="true">Đang Học</MenuItem>
                      <MenuItem value="false">Không Học</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="mb-2">
                <TextField
                  className="w-full"
                  size="small"
                  type="text"
                  id="outlined-basic"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email"
                  variant="outlined"
                />
              </div>

              <div className="mb-2">
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
              <Box sx={{ minWidth: 120 }} className="mb-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Tôn giáo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Tôn giáo"
                    name="tonGiao"
                    value={formData.tonGiao}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Tôn giáo</MenuItem>
                    <MenuItem value="true">Nam</MenuItem>
                    <MenuItem value="false">Nữ</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 120 }} className="mb-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Tỉnh/Thành phố
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Tỉnh/Thành phố"
                    name="tinh"
                    value={formData.tinh}
                    onChange={handleChange}
                  >
                    {city.map((item, index) => (
                      <MenuItem value={item.name} key={index}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120 }} className="mb-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Huyện</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Huyện"
                    name="huyen"
                    value={formData.huyen}
                    onChange={handleChange}
                    disabled={!isCitySelected}
                  >
                    {district.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 120 }} className="mb-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Xã/Phường
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Xã/Phường"
                    name="xa"
                    value={formData.xa}
                    onChange={handleChange}
                    disabled={!isDistrictSelected}
                  >
                    {commune.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <div className="mb-2">
                <TextField
                  className="w-full"
                  size="small"
                  type="text"
                  id="outlined-basic"
                  name="noiSinh"
                  value={formData.noiSinh}
                  onChange={handleChange}
                  label="Nơi sinh"
                  variant="outlined"
                />
              </div>

              <div className="mb-2">
                <TextField
                  className="w-full"
                  size="small"
                  type="text"
                  id="outlined-basic"
                  name="thuongTru"
                  value={formData.thuongTru}
                  onChange={handleChange}
                  label="Địa chỉ thường trú"
                  variant="outlined"
                />
              </div>

              <div className="mb-2">
                <TextField
                  className="w-full"
                  size="small"
                  type="text"
                  id="outlined-basic"
                  name="tamTru"
                  value={formData.tamTru}
                  onChange={handleChange}
                  label="Địa chỉ tạm trú"
                  variant="outlined"
                />
              </div>

              <Box sx={{ minWidth: 120 }} className="mb-2">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Dân tộc</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.danToc}
                    label="Dân tộc"
                    name="danToc"
                    onChange={handleChange}
                  >
                    {ethnic.map((item, index) => (
                      <MenuItem value={item.name} key={index}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
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
