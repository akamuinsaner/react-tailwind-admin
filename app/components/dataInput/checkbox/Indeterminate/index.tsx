'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import React, { useState } from "react";

const Indeterminate = () => {
    const [checkState, setCheckState] = useState([true, false, false]);
    const handleChange = (index: number) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setCheckState(checkState.map((c, i) => i == index
                ? e.target.checked
                : c))
        }
    }
    const allChecked = checkState.every(c => !!c);
    const indeterminate = checkState.some(c => !!c) && !allChecked;

    return (
        <Card className="mb-6">
            <CardHeader>Indeterminate</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Checkbox
                    checked={checkState.every(c => !!c)}
                    indeterminate={indeterminate}
                    onChange={e => {
                        if (e.target.checked) setCheckState([true, true, true]);
                        else setCheckState([false, false, false]);
                    }}
                >Parent</Checkbox>
                <div className="flex gap-3">
                    <Checkbox
                        checked={checkState[0]}
                        onChange={handleChange(0)}
                    >Child1</Checkbox>
                    <Checkbox
                        checked={checkState[1]}
                        onChange={handleChange(1)}
                    >Child2</Checkbox>
                    <Checkbox
                        checked={checkState[2]}
                        onChange={handleChange(2)}
                    >Child3</Checkbox>
                </div>
            </CardBody>
        </Card>
    )
}

export default Indeterminate;