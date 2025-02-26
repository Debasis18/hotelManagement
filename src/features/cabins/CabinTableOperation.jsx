import Filter from "@/ui/Filter";
import ShortBy from "@/ui/ShortBy";

function CabinTableOperation() {
  return (
    <div className="flex justify-center items-center ">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <ShortBy
        options={[
          { value: "name-asc", label: "Short by name (A-Z)" },
          { value: "name-desc", label: "Short by name(Z-A)" },
          { value: "regularPrice-asc", label: "Short by Price (low First)" },
          { value: "regularPrice-desc", label: "Short by Price (High First)" },
          { value: "maxCapacity-asc", label: "Short by Capacity (low First)" },
          { value: "maxCapacity-desc", label: "Short by Capacity (High First)" },
        ]}
      />
    </div>
  );
}

export default CabinTableOperation;
