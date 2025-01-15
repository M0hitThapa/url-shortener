import * as React from 'react';
import { UrlData } from "../../interface/UrlData";
interface IDataTableProps {
    data: UrlData[];
}
const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const { data } = props;
    console.log("Data in DataTable is ", data);
    const renderTableData = () => {

    }
  return(
    <div className='container mx-auto pt-2 pb-10'>
        <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
            <table className='w-full table table-fixed text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-md uppercase text-gray-50 bg-gray-700'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-6/12'>FullUrl</th>
                        <th scope='col' className='px-6 py-3 w-3/12'>ShortUrl</th>
                        <th scope='col' className='px-6 py-3 '>Clicks</th>
                        <th scope='col' className='px-6 py-3 '>Action</th>
                    </tr>
                </thead>
                <tbody>{renderTableData()}</tbody>
            </table>
        </div>
    </div>
  ) ;
};

export default DataTable;
