import * as React from "react";
import { UrlData } from "../../interface/UrlData";
import { Link } from "react-router-dom";
import { serverUrl } from "../../helpers/Constants";
import axios from "axios";

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data, updateReloadState } = props;
  console.log("Data in DataTable is ", data);
  const renderTableData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="text-black bg-purple-200 rounded-lg text-base font-mono font-semibold"
        >
          <td className="px-6 py-3 break-words ">
            <Link to={item.fullUrl} target="_blank" rel="noreferrer noopener">
              {item.fullUrl}
            </Link>
          </td>
          <td className="px-6 py-3">
            <Link
              to={`${serverUrl}/shortUrl/${item.shortUrl}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="px-6 py-3">{item.clicks}</td>
          <td className="px-6 py-3">
            <div className="flex content-center">
              <div
                className="cursor-pointer px-2"
                onClick={() => copyToClipboard(item.shortUrl)}
              >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>

              </div>
              <div
                className="cursor-pointer px-2 text-red-800 "
                onClick={() => deleteUrl(item._id)}
              >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>

              </div>
            </div>
          </td>
        </tr>
      );
    });
  };
  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
      alert(`URL copied: ${serverUrl}/shortUrl/${url}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUrl = async (id: string) => {
    const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
    console.log(response);
    updateReloadState();
  };
  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-lg uppercase text-black bg-purple-300 ">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12 ">
                FullUrl
              </th>
              <th scope="col" className="px-6 py-3 w-3/12">
                ShortUrl
              </th>
              <th scope="col" className="px-6 py-3">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3">
                Copy/Delete
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;