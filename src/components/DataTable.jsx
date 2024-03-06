/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { tableData, tableHeaders } from "../constants/AppConstants";
import { IoMdCheckmark } from "react-icons/io";

const DataTable = ({ search }) => {
  const [rowData, setRowData] = useState(tableData);
  useEffect(() => {
    const updatedData = tableData.filter((item) => {
      if (
        item.brand.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.categories.some((item) => item.toLowerCase().includes(search)) ||
        item.tags.some((item) => item.toLowerCase().includes(search))
      ) {
        return true;
      }
    });
    setRowData(updatedData);
  }, [search]);
  const handleRowClick = (id) => {
    const filterData = rowData.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setRowData(filterData);
  };
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className=""></th>
            {tableHeaders.map((item, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((data) => (
            <tr
              className="bg-white border-b"
              key={data.id}
              onClick={() => {
                handleRowClick(data.id);
              }}
            >
              <td>
                {data.selected && (
                  <IoMdCheckmark
                    className="border bg-black text-white"
                    size={18}
                  />
                )}
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-1"
              >
                <img
                  src={data.logo}
                  className="rounded"
                  width={30}
                  height={30}
                />
                {data.brand}
              </th>
              <td className="px-6 py-4">{data.description}</td>
              <td className="px-6 py-4">members</td>
              <td className="px-6 py-4 space-x-1">
                {data.categories.map((category, index) => (
                  <span
                    key={index}
                    className="border border-gray-300 bg-slate-300 rounded-xl p-0.5"
                  >
                    {category}
                  </span>
                ))}
              </td>
              <td className="px-6 py-4 space-x-1">
                {data.tags.map((tag, index) => (
                  <span key={index} className="border p-0.5  rounded-xl">
                    #{tag}
                  </span>
                ))}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`rounded-xl p-0.5 ${
                    data.nextMeeting.startsWith("In")
                      ? "bg-green-300 border-green-500"
                      : data.nextMeeting === "Tomorrow"
                      ? "bg-blue-300 border-blue-500"
                      : data.nextMeeting.startsWith("No")
                      ? "bg-red-300 border-red-500"
                      : "bg-gray-300 border-gray-500"
                  }`}
                >
                  {data.nextMeeting}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
