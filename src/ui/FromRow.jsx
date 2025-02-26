import { Label } from "@/components/ui/label";

function FormRow({ label, error, children }) {
  const inputId = children?.props?.id || "";

  return (
    <div className="grid grid-cols-3 items-start gap-4">
      <Label htmlFor={inputId} className="font-medium">
        {label}
      </Label>
      <div className="col-span-2">
        {children}
        {error && <Error>{error}</Error>}
      </div>
    </div>
  );
}

function Error({ children }) {
  return <p className="mt-1 text-sm text-red-500">{children}</p>;
}

export default FormRow;
