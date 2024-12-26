import { create } from 'zustand'
import { createHomeSlice } from './modules/discover'

// 对切片进行包装，使其可以被zustand使用
export const useBoundStore = create((set) => ({
  ...createHomeSlice(set)
}))
