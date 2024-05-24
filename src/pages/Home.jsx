import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showSearchInfo, setShowSearchInfo] = useState(true);
  const [searchParams, setSearchParams] = useState({
    khoi: "",
    gioitinh: "",
    hoten: "",
    dantoc: "",
    lop: "",
    mahs: "",
    trangthai: "",
  });

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

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    setFilteredStudents(
      students.filter((student) => {
        return (
          (searchParams.khoi === "" || student.khoi === searchParams.khoi) &&
          (searchParams.gioitinh === "" ||
            student.gioitinh.toString() === searchParams.gioitinh) &&
          (searchParams.hoten === "" ||
            student.hoten
              .toLowerCase()
              .includes(searchParams.hoten.toLowerCase())) &&
          (searchParams.dantoc === "" ||
            student.dantoc === searchParams.dantoc) &&
          (searchParams.lop === "" || student.tenlop === searchParams.lop) &&
          (searchParams.mahs === "" || student.mahs === searchParams.mahs) &&
          (searchParams.trangthai === "" ||
            student.trangthai.toString() === searchParams.trangthai)
        );
      })
    );
  };
  const toggleSearchInfo = () => {
    setShowSearchInfo(!showSearchInfo);
  };
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="container mx-auto py-8">
        {/* Search Bar */}
        <div className=" text-white p-4 rounded-lg shadow-md mb-6">
          <h1 className="text-white bg-teal-800 p-2 mb-3 rounded-sm">
            Thông tin tìm kiếm
          </h1>
          {showSearchInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                name="hoten"
                placeholder="Họ tên"
                value={searchParams.hoten}
                onChange={handleSearchChange}
                className="p-2 rounded bg-white text-teal-800 border-solid border-2"
              />
              <input
                type="text"
                name="mahs"
                placeholder="Mã học sinh"
                value={searchParams.mahs}
                onChange={handleSearchChange}
                className="p-2 rounded bg-white text-teal-800 border-solid border-2"
              />
              <select
                name="khoi"
                value={searchParams.khoi}
                onChange={handleSearchChange}
                className="p-2 rounded bg-white text-teal-800 border-solid border-2"
              >
                <option value="">Khối</option>
                <option value="KTPM">KTPM</option>
                <option value="CNTT">CNTT</option>
                {/* Thêm các giá trị khác tại đây */}
              </select>
              <select
                name="gioitinh"
                value={searchParams.gioitinh}
                onChange={handleSearchChange}
                className="p-2 rounded bg-white text-teal-800 border-solid border-2"
              >
                <option value="">Giới tính</option>
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </select>
              <input
                type="text"
                name="dantoc"
                placeholder="Dân tộc"
                value={searchParams.dantoc}
                onChange={handleSearchChange}
                className="p-2 rounded bg-white text-teal-800 border-solid border-2"
              />
              <input
                type="text"
                name="lop"
                placeholder="Lớp"
                value={searchParams.lop}
                onChange={handleSearchChange}
                className="p-2 rounded bg-white text-teal-800 border-solid border-2"
              />
              <select
                name="trangthai"
                value={searchParams.trangthai}
                onChange={handleSearchChange}
                className="p-2 rounded bg-white text-teal-800 border-solid border-2"
              >
                <option value="">Trạng thái</option>
                <option value="true">Đang Học</option>
                <option value="false">Không Học</option>
              </select>
            </div>
          )}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSearch}
              className="btn m-2 bg-teal-900 text-white hover:bg-teal-700 text-center"
            >
              Tìm kiếm
            </button>
            <button
              onClick={toggleSearchInfo}
              className="btn m-2 bg-teal-900 text-white hover:bg-teal-700 text-center"
            >
              {showSearchInfo ? "Thu gọn" : "Hiển thị"}
            </button>
          </div>
        </div>
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

          <button className="btn m-2 bg-teal-900  text-white hover:bg-teal-700">
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
                  CCCD
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Email
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
                  Khối
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
                      {student.hoten}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.ngaysinh
                        ? new Date(student.ngaysinh).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.gioitinh ? "Nam" : "Nữ"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.cccd}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.thuongtru}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.tenlop}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.khoi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {student.trangthai ? "Đang Học" : "Không Học"}
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

export default Home;
