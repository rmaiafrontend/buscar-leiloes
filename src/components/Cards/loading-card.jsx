import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";

const CardLoading = () => {
  return (
    <div className="w-full h-full rounded-xl shadow-lg flex flex-col justify-between min-h-[400px]  max-h-[450px]">
      <div className="bg-slate-100 w-full h-[257px] p-3 rounded-xl flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <Skeleton className="py-1 px-4 w-1/4" />
          <Skeleton className="h-[32px] w-[32px]" />
        </div>

        <div className="flex justify-left items-center direction">
          <Skeleton className="py-1 px-4 w-fit mr-2" />
          <Skeleton className="py-1 px-4 w-fit" />
        </div>
      </div>

      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          <Skeleton className="font-bold text-[16px] w-3/4" />
          <Separator className="bg-slate-100 my-2" />
          <div className="flex justify-start items-center">
            <Skeleton className="font-bold text-primary text-[19px] w-1/4" />
            <div className="flex ml-3 items-center justify-center">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="font-medium text-[#00FFC2] w-1/4" />
            </div>
          </div>
          <Skeleton className="text-[14px] line-clamp-3 w-full" />
        </div>
        <div className="w-full h-[35px] bg-slate-100 rounded-md flex justify-between items-center mt-3">
          {/* <Skeleton className="text-secondary p-3 text-[14px] w-1/4" /> */}
          {/* <div className="flex justify-between items-center">
            <Skeleton className="text-secondary p-3 text-[12px] w-1/4" />
            <Skeleton className="text-secondary p-3 text-[12px] w-1/4" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
