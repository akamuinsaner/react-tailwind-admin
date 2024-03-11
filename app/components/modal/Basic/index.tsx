'use client'
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Modal from "@/src/components/Modal";
import ModalBody from "@/src/components/Modal/ModalBody";
import ModalFooter from "@/src/components/Modal/ModalFooter";
import ModalHeader from "@/src/components/Modal/ModalHeader";
import { useState } from "react";

const Basic = () => {
    const [open, setOpen] = useState<boolean>(false);
    const close = () => setOpen(false);
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={close}>
                    <ModalHeader>Basic Modal</ModalHeader>
                    <ModalBody>
                        Modal contents...<br />
                        Modal contents...<br />
                        Modal contents...<br />
                    </ModalBody>
                    <ModalFooter>
                        <Button type="text" onClick={close}>Cancel</Button>
                        <Button>Confirm</Button>
                    </ModalFooter>
                </Modal>
            </CardBody>
        </Card>
    )
}

export default Basic;