'use client'
import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import Select from "@/components/select";
import { categories, types } from "@/lib/consts";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { transactionSchema } from "@/lib/validation";

export default function TransactionForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema)
  })

  const onSubmit = (data) => console.log(data)

  return <form className="space-y-4"
    onSubmit={handleSubmit(onSubmit)}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label className="mb-1">Type</Label>
        <Select {...register("type")}>
          {types.map(type => <option key={type}>
            {type}
          </option>)}
        </Select>
      </div>

      <div>
        <Label className="mb-1">Category</Label>
        <Select {...register("category")}>
          {categories.map(category => <option key={category}>
            {category}
          </option>)}
        </Select>
      </div>

      <div>
        <Label className="mb-1">Date</Label>
        <Input {...register("created_at")} />
        {errors.created_at && <p className="mt-1 text-red-500">{errors.created_at.message}</p>}
      </div>

      <div>
        <Label className="mb-1">Amount</Label>
        <Input type="number" {...register("amount")} />
        {errors.amount && <p className="mt-1 text-red-500">{errors.amount.message}</p>}
      </div>

      <div className="col-span-1 md:col-span-2">
        <Label className="mb-1">Description</Label>
        <Input {...register("description")} />
        {errors.description && <p className="mt-1 text-red-500">{errors.description.message}</p>}
      </div>
    </div>

    <div className="flex justify-end">
      <Button type="submit">Save</Button>
    </div>
  </form>
}