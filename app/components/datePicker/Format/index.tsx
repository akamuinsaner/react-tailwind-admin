'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import DatePicker from "@/src/components/DatePicker";
import DateRangePicker from "@/src/components/DatePicker/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";

const Format = () => {
    const handleDate = (value: Dayjs, valueStr: string) => {
        console.log(value, valueStr)
    }
    const handleRange = (value: [Dayjs, Dayjs], valueStr: [string, string]) => {
        console.log(value, valueStr)
    }

    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Format</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <DatePicker
                    placeholder="YYYY/MM/DD"
                    onChange={handleDate}
                    format="YYYY/MM/DD"
                    defaultValue={dayjs()}
                />
                <DatePicker
                    placeholder="MM/DD/YYYY"
                    onChange={handleDate}
                    format="MM/DD/YYYY"
                    defaultValue={dayjs()}
                />
                <DatePicker
                    placeholder="YYYY/MM"
                    onChange={handleDate}
                    format="YYYY/MM"
                    defaultValue={dayjs()}
                />
                <DateRangePicker
                    placeholder={["YYYY/MM/DD", "YYYY/MM/DD"]}
                    onChange={handleRange}
                    format="YYYY/MM/DD"
                    defaultValue={[dayjs(), dayjs()]}
                />
            </CardBody>
        </Card>
    )
}

export default Format;