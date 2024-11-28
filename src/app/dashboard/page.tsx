import { AppLineChart, AppBarChart, AppDoughnutChart, AppRadarChart } from "@/components";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); 
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    data: [1, 2, 3, 2, 5]
  };
}
async function getRadarData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'My First Dataset',
      data: [1, 22, 123, 2, 5],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgb(79, 150, 219)',
      borderWidth: 2,
    }]
  };
}

export const metadata = {
    title: 'Dashboard | Home',
    description: 'Dashboard page'
}

export const dynamic = 'force-dynamic'
export default async function DashboardPage() {
  const chartData = await getData();
  const chartData2 = await getRadarData();

  return (
    <main className="flex-1 overflow-y-auto p-2 sm:p-5 dark:py-0 dark:sm:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 sm:p-4 dark:py-0 dark:sm:py-0 min-h-screen">
        <div className="border-2 dark:border-gray-700 h-[710px]  flex dark:bg-gray-800 rounded-md ">
          <AppRadarChart data={chartData2} className=" w-full p-2 sm:p-5 items-center flex" />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 dark:border-gray-700 h-[300px] sm:h-full dark:bg-gray-800 rounded-md">
              <AppDoughnutChart data={chartData.data } labels={chartData.labels} className="h-full w-full p-2 sm:p-5" />
            </div>
            <div className="border-2 dark:border-gray-700 h-[300px] w-full sm:h-full dark:bg-gray-800 rounded-md">
              <AppBarChart data={chartData.data } labels={chartData.labels} className="h-full w-full p-2 sm:p-5" />
            </div>
          </div>
          <div className="border-2 dark:border-gray-700 h-[300px] dark:bg-gray-800 rounded-md">
            <AppLineChart data={chartData.data } labels={chartData.labels} className="h-full w-full p-2 sm:p-5" />
          </div>
        </div>
      </div>
    </main>
  );
}


