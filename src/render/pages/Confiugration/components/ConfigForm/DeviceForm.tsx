import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '@render/components/ui/button'
import { Input } from '@render/components/ui/input'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from "@render/components/ui/form"


const formSchema = z.object({
    name: z.string().min(2),
})
interface PropsType {
    callback?: any
}
function DeviceForm({ callback }: PropsType) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (
        <div className="flex flex-col gap-3 p-3">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Device Name" {...field}></Input>
                                </FormControl>
                            </FormItem>
                        )}

                    />
                </form>
            </Form>
            <div >
                <Button className='w-64' type="submit">Confirm</Button>
            </div>
        </div>
    )
}

export default DeviceForm