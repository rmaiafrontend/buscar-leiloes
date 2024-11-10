import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function FilterPopover({ label, value, children }) {
  return (
    <Popover>
      <PopoverTrigger className="w-full ">
        <div className="flex flex-col justify-start text-left w-full">
          <p className="font-medium text-[14px] text-left">{label}</p>
          <span className="text-[14px]">{value}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-4 w-auto h-auto ml-4">{children}</PopoverContent>
    </Popover>
  );
}
