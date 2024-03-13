'use client'
import Card from "@/src/components/Card";
import CardBody from "@/src/components/Card/CardBody";
import CardHeader from "@/src/components/Card/CardHeader";
import Select from "@/src/components/Select";
import Option from "@/src/components/Select/SelectOption";

const Search = () => {
    const handleChange = (value: string) => {
        console.log(value)
    }

    const handleSearch = (value: string) => {
        console.log(value)
    }

    return (
        <Card className="break-inside-avoid mb-6">
            <CardHeader>Search</CardHeader>
            <CardBody className="flex flex-col gap-3">
                <Select
                    search
                    onChange={handleChange}
                    onSearch={handleSearch}
                >
                    <Option value="1">Docter</Option>
                    <Option value="2">Lawer</Option>
                    <Option value="3">Scientist</Option>
                    <Option value="4">Entrepreneur</Option>
                    <Option value="5">Astronaut</Option>
                </Select>
            </CardBody>
        </Card>
    )
}

export default Search;