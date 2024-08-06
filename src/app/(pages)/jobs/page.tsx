import JobCard from "@/components/Jobs/JobCard";
import SideBar from "@/components/Jobs/SideBar";
import { MyURL } from "@/utils/constant";

type Props = {};

export const dynamic = "force-dynamic";

async function fetchJobs() {
  try{
  const res = await fetch(MyURL("/api/projects"), {
    //cache: "no-store",
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
  }
  catch(err){
    console.log('err',err)
    return {status:"", data:{}}
  }
}

export default async function Page({}: Props) {
  const { status, data } = await fetchJobs();
  //Steps to perform:
  //Change data flow in decending order
  //Check user profile and show jobs according to his interests
  if (!data) {
    return <h1>No jobs available</h1>;
  }
  let jobs = [];
  for (let i = data.length - 1; i >= 0; i--) {
    jobs.push(<JobCard key={i} data={data[i]} />);
  }

  return (
    <main className="relative flex justify-center ">
      <div className="fixed w-full h-screen z-10"></div>
      <div className="w-[96%] md:w-[90%] lg:w-[80%] z-20 flex flex-row min-h-screen">
        <div className="basis-3/12 lg:block md:block sm:hidden h-[100vh]  self-start static lg:sticky top-0">
          <SideBar />
        </div>
        <div className="lg:basis-9/12 md:basis-10/12 sm:basis-full flex flex-col space-y-4 h-fit">
          {jobs.length == 0 ? (
            <h2 className="text-xl font-bold text-gray-600 text-center">
              No jobs available
            </h2>
          ) : (
            jobs
          )}
        </div>
      </div>
    </main>
  );
}
