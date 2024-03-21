'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import DatePicker from "@/src/components/DatePicker";
import DateRangePicker from "@/src/components/DatePicker/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";

const Basic = () => {
    const handleDate = (value: Dayjs, valueStr: string) => {
        console.log(value, valueStr)
    }
    const handleRange = (value: [Dayjs, Dayjs], valueStr: [string, string]) => {
        console.log(value, valueStr)
    }

    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Basic usage</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <DatePicker
                    placeholder="choose date"
                    onChange={handleDate}
                />
                <DateRangePicker
                    placeholder={['start date', 'end date']}
                    onChange={handleRange}
                />
            </CardBody>
        </Card>
    )
}

export default Basic;