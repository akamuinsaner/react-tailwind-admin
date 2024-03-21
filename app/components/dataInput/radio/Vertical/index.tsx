'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import Radio from "@/src/components/Radio";
import RadioGroup from "@/src/components/Radio/RadioGroup";
import React, { useState } from "react";

const Vertical = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Vertical</CardHeader>
            <CardBody className="flex flex-row gap-3">
                <RadioGroup vertical defaultValue="1">
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>

            </CardBody>
        </Card>
    )
}

export default Vertical;