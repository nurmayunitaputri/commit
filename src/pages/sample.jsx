import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend, Bar, BarChart, PieChart, Pie } from 'recharts';

const LineChartContainer = () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 10, amt: 2400 },
    { name: 'Page A', uv: 50, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 50, pv: 20, amt: 2400 },
    { name: 'Page A', uv: 50, pv: 200, amt: 2400 },
  ];

  return (
    <div className="p-3 border w-full">
      <div className="mb-3">
        <h1 className="text-2xl font-bold">Line Chart</h1>
      </div>
      <div className="shadow-md rounded-xl p-2 border border-indigo-500 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#d62c0e" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div >
    </div>
  )
};

const BarChartContainer = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="p-3 border w-full">
      <div className="mb-3">
        <h1 className="text-2xl font-bold">Bar Chart</h1>
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div >
    </div>
  )
};


const PieChartContainer = () => {
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];

  return (
    <div className="p-3 border w-full">
      <div className="mb-3">
        <h1 className="text-2xl font-bold">Pie Chart</h1>
      </div>
      <div className="shadow-md rounded-xl p-2 border border-indigo-500 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div >
    </div>
  )
};

const ChartsPage = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 p-3">
      <LineChartContainer />
      <BarChartContainer />
      <PieChartContainer />
    </div>
  )
}

export default ChartsPage;