'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Input from "@/src/components/Input";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from "react";

const Password = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => setVisible(!visible);

    const icon = visible
        ? <EyeIcon onClick={toggleVisible} />
        : <EyeSlashIcon onClick={toggleVisible} />
    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Password</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Input type={visible ? 'text' : 'password'} placeholder="password input" suffix={icon} />
            </CardBody>
        </Card>
    )
}

export default Password;