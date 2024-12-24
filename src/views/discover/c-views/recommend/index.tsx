import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { request } from '@/service/api'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 测试网络请求
  useEffect(() => {
    request({
      url: '/banner',
      method: 'GET'
    }).then((res) => {
      console.log(res)
    })
  })

  return <div>Recommend</div>
}

export default memo(Recommend)
