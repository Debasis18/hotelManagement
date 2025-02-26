import CreateCabinForm from "@/features/cabins/CreateCabinForm";
import { Button } from "@/components/ui/button";
import Modal from "@/ui/Modal";

function AddCabins() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}


export default AddCabins;
