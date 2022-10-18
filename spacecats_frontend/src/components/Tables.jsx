import React, { useState } from "react";
import { DateTime } from "luxon";
import DatePicker from "react-datepicker";

const Table = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      <div className="container mx-auto mt-10 px-3">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="py-3 pl-2">
              <div className="flex">
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  withPortal
                />
                <label htmlFor="hs-table-search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  name="hs-table-search"
                  id="hs-table-search"
                  className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
              <div></div>
            </div>

            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        formatted_date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Precip Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Temperature (C)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Apparent Temperature (C)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Humidity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Wind Speed (km/h)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Wind Bearing (degrees)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Visibility (km)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Loud Cover
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Pressure (millibars)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Daily Summary
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {React.Children.toArray(
                      csvData.map((data) => {
                        return (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.id}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {DateTime.local().toLocaleString(
                                data.formatted_date
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.summary}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.precip_type}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.temperature}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.apparent_temperature}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.humidity}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.wind_speed}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.wind_bearing}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.visibility}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.loud_cover}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.pressure}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {data.daily_summary}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

const csvData = [
  {
    id: 1,
    formatted_date: "2006-04-01 00:00:00.000 +0200",
    summary: "Partly Cloudy",
    precip_type: "rain",
    temperature: "9.472222222",
    apparent_temperature: "7.388888889",
    humidity: "0.89",
    wind_speed: "14.1197",
    wind_bearing: 251,
    visibility: "15.8263",
    loud_cover: 0,
    pressure: "1015.13",
    daily_summary: "Partly cloudy throughout the day.",
  },
  {
    id: 2,
    formatted_date: "2006-04-01 00:00:00.000 +0200",
    summary: "Partly Cloudy",
    precip_type: "rain",
    temperature: "9.472222222",
    apparent_temperature: "7.388888889",
    humidity: "0.89",
    wind_speed: "14.1197",
    wind_bearing: 251,
    visibility: "15.8263",
    loud_cover: 0,
    pressure: "1015.13",
    daily_summary: "Partly cloudy throughout the day.",
  },
  {
    id: 3,
    formatted_date: "2006-04-01 00:00:00.000 +0200",
    summary: "Partly Cloudy",
    precip_type: "rain",
    temperature: "9.472222222",
    apparent_temperature: "7.388888889",
    humidity: "0.89",
    wind_speed: "14.1197",
    wind_bearing: 251,
    visibility: "15.8263",
    loud_cover: 0,
    pressure: "1015.13",
    daily_summary: "Partly cloudy throughout the day.",
  },
  {
    id: 4,
    formatted_date: "2006-04-01 00:00:00.000 +0200",
    summary: "Partly Cloudy",
    precip_type: "rain",
    temperature: "9.472222222",
    apparent_temperature: "7.388888889",
    humidity: "0.89",
    wind_speed: "14.1197",
    wind_bearing: 251,
    visibility: "15.8263",
    loud_cover: 0,
    pressure: "1015.13",
    daily_summary: "Partly cloudy throughout the day.",
  },
  {
    id: 5,
    formatted_date: "2006-04-01 00:00:00.000 +0200",
    summary: "Partly Cloudy",
    precip_type: "rain",
    temperature: "9.472222222",
    apparent_temperature: "7.388888889",
    humidity: "0.89",
    wind_speed: "14.1197",
    wind_bearing: 251,
    visibility: "15.8263",
    loud_cover: 0,
    pressure: "1015.13",
    daily_summary: "Partly cloudy throughout the day.",
  },
];
