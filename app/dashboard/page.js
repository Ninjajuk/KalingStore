'use client'
import React from 'react';
import CardSalesReport from './CardSalesReport';
import UpgradeToProCard from './SubscribePro';
import SalesReportTable from './table/sellTable';


const Dashboard = () => {

  return (
    <section className="w-full  h-full ">
      {/* <div class="w-full h-full grid grid-flow-row-dense grid-cols-3 ">
        <div class="col-span-2 bg-sky-600 h-full px-4 py-4 flex flex-col gap-4">
          <CardSalesReport />
          <SalesReportTable />
        </div>
        <div class="col-span-2 bg-purple-500 h-full"><SalesReportTable/></div>
        <div class="flex flex-col">
          <div class="flex-grow bg-blue-500 px-4 py-4">
            <UpgradeToProCard />
          </div>
          <div class="flex-grow bg-blue-500 px-4 py-4">
            <UpgradeToProCard />
          </div>
        </div>
      </div> */}

      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 h-full flex flex-col px-4 py-4">
          <div className="w-full h-1/3 mb-4"><CardSalesReport /></div>
          <div className="w-full h-2/3"><SalesReportTable /></div>
        </div>

        <div className="w-full lg:w-2/5 h-full flex flex-col px-4 py-4 gap-4">
          <div className="w-full h-1/2 bg-red-700 rounded-md"><UpgradeToProCard /></div>
          <div className="w-full h-1/2 bg-purple-700 rounded-md"><UpgradeToProCard /></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
