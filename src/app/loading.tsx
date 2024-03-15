'use client'
import { squircle } from 'ldrs'

squircle.register()

export default function Loading() {
  return (
    <div className="flex h-screen flex-1 items-center justify-center">
      <l-squircle bg-opacity="0.1" color="#11182750" size="37" speed="0.9" stroke="5" stroke-length="0.15" />
    </div>
  )
}
