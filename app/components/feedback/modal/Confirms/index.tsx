'use client'
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import { confirm, ConfirmModalProvider } from "@/src/components/Modal";
import { RTConfirmModalType } from "@/src/components/Modal/confirm";

const Confirms = () => {
    const onConfirm = (type: RTConfirmModalType) => {
        confirm[type]({
            title: 'type',
            content: 'this is a ' + type + ' confirm modal'
        })
    }
    const confirmTypes: RTConfirmModalType[] = [
        'confirm',
        'success',
        'info',
        'warning',
        'danger',
    ]
    return (
        <ConfirmModalProvider>
            <Card className="break-inside-avoid mb-6">
                <CardHeader>Confirms</CardHeader>
                <CardBody className="flex gap-3">
                    {confirmTypes.map(type => (
                        <Button
                            key={type}
                            color={type === 'confirm' ? 'primary' : type}
                            onClick={() => onConfirm(type)}
                        >{type}</Button>
                    ))}
                    
                </CardBody>
            </Card>
        </ConfirmModalProvider>
    )
}

export default Confirms;