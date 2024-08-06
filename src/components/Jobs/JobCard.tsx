import Link from "next/link";

export default function JobCard({ data }: { data: any }) {
  return (
    <div className="w-full bg-white border border-gray-200 group hover:bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-4 py-8 hover:shadow-md">
      <div>
        <div className="bg-white group-hover:bg-gray-50 rounded-lg dark:bg-gray-800 flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-extrabold tracking-tight w-[80%] text-gray-700 dark:text-white">
              {data.title}
            </h2>
            <p className="font-bold text-gray-500">
              <span className="font-Semibold">Budget : </span>${data.budget}
            </p>
          </div>
          <p className="text-gray-500 text-sm font-extralight">
            Posted at {data.time_posted} , {data.date_posted}
          </p>
          <textarea
            disabled
            rows={2}
            className="resize-none -ml-3 group-hover:bg-gray-50 text-gray-500 dark:text-gray-400 w-full overflow-y-hidden border-none outline-none"
            value={data.description}
          ></textarea>
          <p className="text-gray-600 font-bold text-sm">
            Proposals: <span className="text-indigo-700">5</span>
          </p>

          <div className="flex justify-between items-center">
            {data.skills ? (
              <div className="flex items-center space-x-2">
                {data.skills.split(",").map((skill: string, i: number) => {
                  return (
                    <p
                      key={i}
                      className="px-3 py-1 bg-indigo-50 rounded-full text-xs font-bold"
                    >
                      {skill}
                    </p>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
            <Link
              href={`/jobs/${data.project_id}`}
              className="inline-flex ml-auto items-center font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
