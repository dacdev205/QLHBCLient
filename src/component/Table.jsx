import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";

const Table = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.234.154:8080/api/hocsinh")
      .then((response) => {
        setStudents(response.data);
        setFilteredStudents(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAllCheckedChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    if (newAllChecked) {
      setSelectedStudents(students.map((student) => student.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleStudentCheckedChange = (id) => {
    setSelectedStudents((prevState) =>
      prevState.includes(id)
        ? prevState.filter((studentId) => studentId !== id)
        : [...prevState, id]
    );
  };

  const handleDeleteSelectedStudents = () => {
    axios
      .delete(
        `http://192.168.234.154:8080/api/hocsinh/${selectedStudents.join(",")}`
      )
      .then(() => {
        setFilteredStudents((prevState) =>
          prevState.filter((student) => !selectedStudents.includes(student.id))
        );
        setSelectedStudents([]);
      })
      .catch((error) =>
        console.error("Error deleting selected students:", error)
      );
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="w-full md:w-full px-4 mr-8">
        <Searchbar></Searchbar>
        <div className="flex justify-end">
          <button className="btn m-2 bg-teal-900 text-white hover:bg-teal-700">
            Nhập/Xuất
          </button>
          <Link
            to="/addStudent"
            className="btn m-2 bg-teal-900  text-white hover:bg-teal-700"
          >
            Thêm mới
          </Link>

          <button
            onClick={handleDeleteSelectedStudents}
            className="btn m-2 bg-teal-900  text-white hover:bg-teal-700"
          >
            Xoá
          </button>
        </div>
        <div className="bg-white text-teal-800 p-4 rounded-lg shadow-md overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  STT
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleAllCheckedChange}
                  />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Họ Tên
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Ngày Sinh
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Giới Tính
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  maDinhDanh
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Địa Chỉ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Lớp
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Trạng Thái
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student.id)}
                        onChange={() => handleStudentCheckedChange(student.id)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Button
                        id="fade-button"
                        aria-controls={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        {student.hoTen}
                      </Button>
                      <Menu
                        id="fade-menu"
                        MenuListProps={{
                          "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                      >
                        <MenuItem onClick={handleClose}>Xem hồ sơ</MenuItem>
                        <Divider />

                        <MenuItem onClick={handleClose}>Sửa hồ sơ</MenuItem>
                        <Divider />

                        <MenuItem onClick={handleClose}>Xoá hồ sơ</MenuItem>
                      </Menu>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.ngaySinh
                        ? new Date(student.ngaySinh).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.gioiTinh ? "Nam" : "Nữ"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.maDinhDanh}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.thuongTru.slice(0, 30)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.lop}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.trangThai ? "Đang Học" : "Không Học"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="11"
                    className="px-6 py-4 whitespace-nowrap text-center text-sm"
                  >
                    Không có học sinh nào được tìm thấy.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
