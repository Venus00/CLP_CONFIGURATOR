import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "@render/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@render/components/ui/collapsible"
import DeviceForm from "./ConfigForm/DeviceForm";

interface PropsType {
    title: string;
    icon?: any
    callback: any
}
function renderForm(title) {
    if (title = "Device") {
        return <DeviceForm />
    }
}
export function MainCard({ title, icon, callback }: PropsType) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <div className=" h-16 flex items-center justify-between p-3 m-3 bg-gray-400 rounded-md ">
                <h4 className="text-xl font-semibold">
                    {title}
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <CaretSortIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="">
                {
                    renderForm(title)
                }
            </CollapsibleContent>
        </Collapsible>
    )
}
