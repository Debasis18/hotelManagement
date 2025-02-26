import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function SelectOption({ options,value, onChange,...props }) {
  
  return (
    <Select  value={value} onValueChange={onChange} {...props}  >
      <SelectTrigger >
        <SelectValue placeholder="Short by.." />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
