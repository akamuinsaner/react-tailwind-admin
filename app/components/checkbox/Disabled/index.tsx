'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Checkbox from "@/src/components/Checkbox";
import React, { useState } from "react";

const Disabled = () => {
    return (
        <Card className="mb-6">
            <CardHeader>Disabled</CardHeader>
            <CardBody className="flex flex-row gap-3">

                <Checkbox disabled checked={false}>UnChecked</Checkbox>
                <Checkbox disabled indeterminate={true}>Indeterminate</Checkbox>
                <Checkbox disabled checked={true}>Checked</Checkbox>
            </CardBody>
        </Card>
    )
}

export default Disabled;