import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [serarchParams, setSearchParams] = useSearchParams();
  const currentFilter=serarchParams.get(filterField)
  function handelClick(value) {
    serarchParams.set(filterField, value);
    setSearchParams(serarchParams);
  }
  return (
    <div className="flex border border-gray-400 mb-4 px-2 rounded-md">
      {options.map((option) => (
        <Button
        className={`${currentFilter===option.value ? "bg-blue-200":""}`}
          variant="ghost"
          key={option.value}
          onClick={() => handelClick(option.value)}
          disabled={option.value===currentFilter}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
