import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Facebook, Instagram, Twitter } from 'lucide-react'
  

const SelectAccount = () => {
  return (
    <div>
        <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={<div className='flex items-center'><Instagram color='red'/><p className='font-semibold text-sm px-2'>Instagram</p></div>} />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">
            <div className='flex items-center'><Facebook color='red'/><p className='font-semibold text-sm px-2'>Facebook</p></div>
            </SelectItem>
            <SelectItem value="dark">
            <div className='flex items-center'><Twitter color='red'/><p className='font-semibold text-sm px-2'>Twitter</p></div>
            </SelectItem>
            <SelectItem value="system">
            <div className='flex items-center'><Twitter color='red'/><p className='font-semibold text-sm px-2'>Tiktok</p></div>
            </SelectItem>
        </SelectContent>
        </Select>
    </div>
  )
}

export default SelectAccount