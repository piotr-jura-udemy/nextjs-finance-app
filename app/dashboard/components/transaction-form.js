'use client'

import { useForm } from "react-hook-form"
import Input from '../../../components/input';
import Label from "@/components/label";
import Button from "@/components/button"
import Select from '../../../components/select';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { clearTransactionListCache } from "../actions";

export default function TransactionForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const [isSaving, setSaving] = useState(false)
  const onSubmit = async (data) => {
    reset()
    console.log(JSON.stringify({
      ...data,
      created_at: (new Date).toISOString()
    }))
    setSaving(true)
    try {
      await fetch('http://localhost:3100/transactions', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          created_at: (new Date).toISOString()
        })
      })
    } finally {
      setSaving(false)
    }
    await clearTransactionListCache('user-me')
    router.push('/dashboard')
  }

  return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label className="mb-1">Type</Label>
        <Select  {...register("type")}>
          <option>Income</option>
          <option>Expense</option>
        </Select>
      </div>

      <div>
        <Label className="mb-1">Category</Label>
        <Select {...register("category")}>
          <option>House</option>
          <option>Car</option>
          <option>Food</option>
          <option>Health</option>
          <option>Education</option>
        </Select>
      </div>

      <div>
        <Label className="mb-1">Description</Label>
        <Input defaultValue="" {...register("description")} />
      </div>
      <div>
        <Label className="mb-1">Amount</Label>
        <Input type="number" defaultValue={0} {...register("amount")} />
      </div>
    </div>

    <div className="flex justify-end">
      <Button type="submit" disabled={isSaving}>Save</Button>
    </div>
  </form>
}