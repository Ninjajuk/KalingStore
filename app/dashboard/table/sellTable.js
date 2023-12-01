import React from 'react';
import {data} from './data'

const SalesReportTable = () => {
  return (
    <div className="w-full h-full overflow-x-auto ">
      <table className="w-full border-collapse">
        <thead className="md:table-header-group sticky top-0">
          <tr>
            <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-400 text-left">
              Store Name
            </th>
            <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-400 text-left">
              Location
            </th>
            <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-400 text-left">
              Sell
            </th>
            <th className="border px-2 md:px-4 py-1 md:py-2 text-xs font-medium md:font-normal bg-gray-400 text-left">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
              <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">{item.name}</td>
              <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">{item.location}</td>
              <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">{item.sell}</td>
              <td className="border px-1 md:px-4 py-1 md:py-2 text-xs">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReportTable;
