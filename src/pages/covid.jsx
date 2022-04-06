import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend, Bar, BarChart, PieChart, Pie } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CovidPage = () => {
  const [chartData, setChartData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios({
        url: '/covid.json',
        method: 'get',
      });
      console.log('response > ', response.data);
      setChartData(response.data.list_data);
    } catch (error) {
      console.log('error > ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <LineChartContainer data={chartData} />
      <BarChartContainer data={chartData} />
    </div>
  );
};
const LineChartContainer = ({ data }) => {
  return (
    <div className="p-3 border w-full">
      <div className="mb-3">
        <h1 className="text-2xl font-bold">Update Kasus Covid</h1>
      </div>
      <div className="shadow-md rounded-xl p-2 border border-pink-500 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="jumlah_kasus" stroke="#8884d8" />
            <Line type="monotone" dataKey="jumlah_meninggal" stroke="#FF0000" />
            <Line type="monotone" dataKey="jumlah_sembuh" stroke="#0B6623" />
            <XAxis dataKey="key" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
const BarChartContainer = ({ data }) => { 
  return ( 
    <div className="p-3 border w-full"> 
      <div className="mb-3"> 
        <h1 className="text-2xl font-bold">Penambahan</h1> 
      </div> 
      <div className="shadow-md rounded-xl p-2 border border-indigo-500 h-64 w-full"> 
        <ResponsiveContainer width="100%" height="100%"> 
          <BarChart 
            width={500} 
            height={300} 
            data={data} 
            margin={{ 
              top: 5, 
              right: 30, 
              left: 20, 
              bottom: 5, 
            }} 
          > 
            <CartesianGrid strokeDasharray="3 3" /> 
            <XAxis dataKey="key" /> 
            <YAxis /> 
            <Tooltip /> 
            <Legend /> 
            <Bar dataKey="penambahan.positif" fill="##8884d8" /> 
            <Bar dataKey="penambahan.sembuh" fill="#82ca9d" /> 
            <Bar dataKey="penambahan.meninggal" fill="#FF0000" /> 
          </BarChart> 
        </ResponsiveContainer> 
      </div > 
    </div> 
  ) 
};

export default CovidPage;
