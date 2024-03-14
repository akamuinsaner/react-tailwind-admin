'use client'
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Modal, { RTModalProps } from "@/src/components/Modal";
import ModalBody from "@/src/components/Modal/ModalBody";
import ModalFooter from "@/src/components/Modal/ModalFooter";
import ModalHeader from "@/src/components/Modal/ModalHeader";
import { useState } from "react";

const Sizes = () => {
    const [fullWidth, setFullwidth] = useState<boolean>(false);
    const [size, setSize] = useState<RTModalProps["size"]>(null);
    const close = () => {
        setSize(null);
        setFullwidth(false);
    }
    const sizes: RTModalProps["size"][] = ['xs', 'sm', 'md', 'lg', 'xl'];
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Sizes</CardHeader>
            <CardBody className="flex gap-3">
                {sizes.map(size => (
                    <Button key={size} onClick={() => setSize(size)}>{size}</Button>
                ))}
                <Button key={size} onClick={() => setFullwidth(true)}>full width</Button>
                <Modal
                    open={!!size || fullWidth}
                    size={size}
                    onClose={close}
                    fullWidth={fullWidth}>
                    <ModalHeader>{size && size.toUpperCase()} Modal</ModalHeader>
                    <ModalBody>
                        Modal contents...<br />
                        Modal contents...<br />
                        Modal contents...<br />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="text" onClick={close}>Cancel</Button>
                        <Button>Confirm</Button>
                    </ModalFooter>
                </Modal>
            </CardBody>
        </Card>
    )
}

export default Sizes;