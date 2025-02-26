import { useSearchParams } from "react-router-dom";
import { SelectOption } from "./Select";

function ShortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value) => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };

  return (
    <div className=" border-gray-400 mb-4 p-1" >
    <SelectOption 
      options={options}
      value={searchParams.get("sortBy") || ""}
      onChange={handleChange}
    />
     </div>
  );
}

export default ShortBy;
