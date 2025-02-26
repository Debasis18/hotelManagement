import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "@/ui/Modal";
import { ConfirmDelete } from "@/ui/ConfirmDelete";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Edit, MoreHorizontal } from "lucide-react";

function CabinRows({ cabin }) {
  const { deleteCabin, deleteLoading } = useDeleteCabin();
  const { createCabin, isCreating } = useCreateCabin();

  function handelDuplicate() {
    createCabin({
      name: `copy of ${cabin.name}`,
      maxCapacity: cabin.maxCapacity,
      regularPrice: cabin.regularPrice,
      discount: cabin.discount,
      image: cabin.image,
      discription: cabin.discription,
    });
  }

  return (
    <TableRow key={cabin.id}>
      <TableCell className="font-medium">
        <img height={"50px"} width={"50px"} src={cabin.image} />
      </TableCell>
      <TableCell>{cabin.name}</TableCell>
      <TableCell> Fit Upto {cabin.maxCapacity}</TableCell>
      <TableCell>{formatCurrency(cabin.regularPrice)}</TableCell>
      <TableCell className="text-right text-green-400">
        {cabin.discount ? formatCurrency(cabin.discount) : <span>&mdash;</span>}
      </TableCell>
      <TableCell className="text-right flex gap-2 justify-end">
        <Modal>
          <Modal.Open opens="edit">
            <Edit />
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
        </Modal>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <div className="flex flex-col">
              <ConfirmDelete
                disabled={deleteLoading}
                onConfirm={() => deleteCabin(cabin.id)}
                resourceName="cabins"
              />

              <DropdownMenuItem onClick={handelDuplicate} disabled={isCreating}>
                <Button variant="ghost">
                  <Copy /> Duplicate
                </Button>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

export default CabinRows;
