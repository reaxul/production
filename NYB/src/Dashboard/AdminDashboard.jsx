import { useCallback, useState } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import {
  BsArrowDownShort,
  BsArrowUpShort,
  BsCart2,
  BsCurrencyDollar,
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

// char demo data below
const data = [
  {
    name: "Jan",
    sales: 400,
    revenue: 240,
    customer: 200,
  },
  {
    name: "Feb",
    sales: 300,
    revenue: 138,
    customer: 210,
  },
  {
    name: "Mar",
    sales: 200,
    revenue: 980,
    customer: 220,
  },
  {
    name: "Apr",
    sales: 280,
    revenue: 308,
    customer: 400,
  },
  {
    name: "May",
    sales: 190,
    revenue: 400,
    customer: 281,
  },
  {
    name: "Jun",
    sales: 230,
    revenue: 380,
    customer: 200,
  },
  {
    name: "Jul",
    sales: 390,
    revenue: 430,
    customer: 900,
  },
  {
    name: "Aug",
    sales: 490,
    revenue: 300,
    customer: 500,
  },
  {
    name: "Sep",
    sales: 349,
    revenue: 430,
    customer: 210,
  },
  {
    name: "Oct",
    sales: 340,
    revenue: 300,
    customer: 500,
  },
  {
    name: "Nov",
    sales: 490,
    revenue: 300,
    customer: 100,
  },
  {
    name: "Dec",
    sales: 490,
    revenue: 400,
    customer: 100,
  },
];

//data for pi chart
const pieData = [
  { name: "Tasty Of Tradition", value: 400 },
  { name: "Ahar", value: 300 },
  { name: "Food Club", value: 300 },
  { name: "Fuddy Matth", value: 200 },
];

export const AdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7c5c"];
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div>
          <div className="lg:max-w-5xl text-lg font-medium  grid lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
                      {/* chart */}
        <div className=" col-span-4  w-full h-96 rounded-md  dark-content">
          <div className="flex justify-between items-center">
            <p className="ml-4 my-5 dark-title">Revenue</p>
            <div>
              <button className="border text-sm font-normal px-1 rounded-md dark-text">
                All
              </button>
              <button className="border text-sm mx-2 font-normal px-1 rounded-md dark-text">
                1M
              </button>
              <button className="border text-sm mr-2 font-normal px-1 rounded-md dark-text">
                6M
              </button>
              <button className="border text-sm mr-2 font-normal px-1 rounded-md dark-text">
                1Y
              </button>
            </div>
          </div>
          <div style={{ width: "100%", height: "75%" }}>
            <ResponsiveContainer>
              <AreaChart
                width={500}
                height={30}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="customer"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className=" hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h- [120px] p-3 dark-content">
          <div className="flex text-sm justify-between ">
            <p className=" text-slate-400 dark-title">Orders</p>
            <BsCart2 className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p className="dark-text">5,312</p>
            <p className="text-xs flex items-center text-red-600">
              {" "}
              <BsArrowDownShort />
              2.58%
            </p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">View Orders</p>
          </div>
        </div>
        {/* revenue */}
        <div className=" hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h- [120px] p-3 dark-content">
          <div className="flex text-sm justify-between">
            <p className=" text-slate-400 dark-title">Revenue</p>
            <BsCurrencyDollar className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p className="dark-text">$8,312</p>
            <p className="text-xs flex items-center text-green-600">
              {" "}
              <BsArrowUpShort />
              2.29%
            </p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">
              View Earnings
            </p>
          </div>
        </div>

        {/* customer */}
        <div className=" hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h- [120px] p-3 dark-content">
          <div className="flex text-sm justify-between">
            <p className=" text-slate-400 dark-title">Customer</p>
            <FiUser className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p className="dark-text">$18,312</p>
            <p className="text-xs flex items-center text-green-600">
              {" "}
              <BsArrowUpShort />
              5.16%
            </p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">All Customer</p>
          </div>
        </div>
        {/* Balance */}
        <div className=" hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h- [120px] p-3 dark-content">
          <div className="flex text-sm justify-between">
            <p className=" text-slate-400 dark-title">Balance</p>
            <AiOutlineCreditCard className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p className="dark-text">$35.64k</p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">
              Withdraw Money
            </p>
          </div>
        </div>



        <div className="col-span-4 flex items-center justify-center w-full h-96 rounded-md  shadow-md dark-content">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={onPieEnter}>
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

//component for design pie chart
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={10} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333">{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
