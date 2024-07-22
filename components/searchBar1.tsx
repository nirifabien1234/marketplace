import { FC } from "react";
import { FilterVerticalIcon, Search01Icon } from "hugeicons-react";
import { Input } from "./ui/input";

interface SearchBar1Props {
  searchIconClassName?: string;
  inputClassName?: string;
  filterIconClassName?: string;
  placeholder?: string;
}

const SearchBar1: FC<SearchBar1Props> = ({
  searchIconClassName = "text-primary",
  inputClassName = "  px-10 py-6  text-sm rounded-lg border-none",
  filterIconClassName = "text-headingColor",
  placeholder = "Search...",
}) => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search01Icon className={searchIconClassName} strokeWidth={2} size={16} />
      </span>
      <Input
        type="text"
        placeholder={placeholder}
        className={inputClassName}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
        <FilterVerticalIcon strokeWidth={2} size={16} className={filterIconClassName} />
      </span>
    </div>
  );
};

export { SearchBar1 };
