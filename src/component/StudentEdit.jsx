import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LINK_API } from "../globalAPI/linkAPI";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";

const StudentEdit = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [newImage, setNewImage] = useState(null);
  const PF = `${LINK_API}/${id}/image`;

  useEffect(() => {
    function getStudentById() {
      axios
        .get(`${LINK_API}/${id}`)
        .then((res) => {
          setStudent(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStudentById();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateStudentData = async () => {
      try {
        if (newImage) {
          const formData = new FormData();
          formData.append("image", newImage);
          await axios.put(`${LINK_API}/${id}/edit-image`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        }
        await axios.put(`${LINK_API}/${id}`, student);
      } catch (err) {
        console.error("Error updating student data:", err);
      }
    };
    updateStudentData();
  };

  return (
    <div className="bg-white w-full min-h-screen text-black">
      <h1>Thông tin chung</h1>
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 min-h-screen bg-white gap-4">
          <div>
            <img
              className="w-64 h-64 object-cover"
              src={newImage ? URL.createObjectURL(newImage) : PF}
              alt=""
            />
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-10">
              <div>
              <TextField
                  label="Họ và tên"
                  name="hoTen"
                  value={student.hoTen || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Lớp"
                  name="lop"
                  value={student.lop || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Giới tính</InputLabel>
                  <Select
                    name="gioiTinh"
                    label="Giới tính"
                    value={student.gioiTinh || ""}
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>Nam</MenuItem>
                    <MenuItem value={false}>Nữ</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Mã học sinh"
                  name="maHs"
                  value={student.maHs || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                
                <FormControl fullWidth margin="normal">
                  <InputLabel>Trạng thái</InputLabel>
                  <Select
                    name="trangThai"
                    label="Trạng thái"
                    value={student.trangThai}
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>Đang học</MenuItem>
                    <MenuItem value={false}>Không Học</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Ngày sinh"
                  type="date"
                  name="ngaySinh"
                  value={
                    student.ngaySinh
                      ? new Date(student.ngaySinh).toISOString().substr(0, 10)
                      : ""
                  }
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label="Ngày vào trường"
                  type="date"
                  name="nhapHoc"
                  value={
                    student.nhapHoc
                      ? new Date(student.nhapHoc).toISOString().substr(0, 10)
                      : ""
                  }
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              
              </div>
              <div>
              <TextField
                  label="Nơi sinh"
                  name="noiSinh"
                  value={student.noiSinh || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              <TextField
                  label="Thành Phố/Tỉnh"
                  name="tinh"
                  value={student.tinh || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                
                <TextField
                  label="Quận/Huyện"
                  name="huyen"
                  value={student.huyen || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Phường/Xã"
                  name="xa"
                  value={student.xa || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Địa chỉ thường trú"
                  name="thuongTru"
                  value={student.thuongTru || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Địa chỉ tạm trú"
                  name="tamTru"
                  value={student.tamTru || ""}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <div className="flex justify-end">
                  <Button type="submit" variant="contained" color="primary">
                    Lưu thay đổi
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentEdit;
