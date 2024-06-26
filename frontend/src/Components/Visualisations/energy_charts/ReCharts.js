import React from "react";
import EnergyDoughnut from "./EnergyDoughnut";
import EnergyStackedBarChart from "./EnergyStackedBarChart";
import EnergyTimeSeries from "./EnergyTimeSeries";
import ReBarchart from "./ReBarchart";
import "chartjs-adapter-date-fns";

export default function ReCharts({ energy_data }) {
  return (
    <>
      <div className="md:col-span-5 sm:col-span-5 bg-slate-500 box rounded-md shadow-sm shadow-slate-300 p-4 text-center w-full">
        <div className="border-b-2 border-gray-400 font-bold sans-serif text-gray-50">
          Daily Renewable Energy Generation vs. Consumption
        </div>
        <div className="chart-container h-72 bg-slate-50 font-bold mt-2 p-4 rounded-lg">
          <EnergyTimeSeries energy_data={energy_data}></EnergyTimeSeries>
        </div>
      </div>
      <div className="md:col-span-3 sm:col-span-3  bg-slate-500 box rounded-md shadow-sm shadow-slate-300 p-4 place-self-center text-center w-full">
        <div className="border-b-2 border-gray-400 font-bold sans-serif text-gray-50 ">
          Renewable Energy Mix Distribution
        </div>
        <div className="w-full h-72 flex justify-center items-center bg-slate-50 font-bold mt-2 p-4 rounded-lg">
          <EnergyDoughnut energy_data={energy_data}></EnergyDoughnut>
        </div>
      </div>

      <div className="md:col-span-4 sm:col-span-5 bg-slate-500 box rounded-md shadow-sm shadow-slate-300 p-4 place-self-center text-center w-full">
        <div className="border-b-2 border-gray-400 font-bold sans-serif text-gray-50">
          State-wise Renewable Energy Generation and Consumption
        </div>
        <div className="chart-container h-72 bg-slate-50 font-bold mt-2 p-4 rounded-lg">
          <ReBarchart energy_data={energy_data}></ReBarchart>
        </div>
      </div>
      <div className="md:col-span-4 sm:col-span-5 bg-slate-500 box rounded-md shadow-sm shadow-slate-300 p-4 place-self-center text-center w-full">
        <div className="border-b-2 border-gray-400 font-bold sans-serif text-gray-50">
          Daily Energy Generation by Source
        </div>
        <div className="chart-container w-full h-72 bg-slate-50 font-bold mt-2 p-4 rounded-lg">
          <EnergyStackedBarChart
            energy_data={energy_data}
          ></EnergyStackedBarChart>
        </div>
      </div>
    </>
  );
}
