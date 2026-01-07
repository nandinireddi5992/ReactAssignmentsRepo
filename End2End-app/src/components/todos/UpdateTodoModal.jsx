import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function UpdateTodoModal({ open, setOpen, todo, onUpdate }) {
  const [title, setTitle] = useState(todo?.title || "");

  const handleSave = () => {
    onUpdate(title);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button onClick={handleSave}>Save</Button>
      </DialogContent>
    </Dialog>
  );
}
