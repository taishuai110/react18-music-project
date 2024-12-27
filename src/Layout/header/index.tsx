import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import headerTitles from '@/assets/data/header-titles.json'
import { HeaderLeft } from './style'

const Header = () => {
  // 判断链接是内部还是外部的
  function showItem(item: any) {
    if (item.type === 'path') {
      // 相比link有自动active状态
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon bg-sprite_01 bg-no-repeat bg-[0_0]"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <div className="box h-[75px] bg-[#242424] text-sm text-white">
      <div className="content h-full flex justify-between mx-auto w-1100">
        <HeaderLeft className="header-left flex">
          <a
            className="logo h-full block w-[176px] indent-[-9999px] bg-sprite_01 bg-no-repeat bg-[0_0]"
            href="/"
          >
            网易云音乐
          </a>
          <div className="title-list flex leading-[70px]">
            {headerTitles.map((item) => {
              return (
                <div className="item relative" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>

        <div className="header-right flex items-center text=[#787878] text-xs">
          <span className="input">
            <Input
              className="search w-[158px] h-8 rounded-2xl placeholder-sm"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </span>
          <span className="center w-[90px] h-8 leading-8 text-[#ddd] hover:text-[#fff] hover:border-[#fff] text-center border border-gray-600 rounded-2xl mx-4 cursor-pointer">
            创作者中心
          </span>
          <span className="login">登录</span>
        </div>
      </div>
      <div className="divider h-[5px] bg-[#c20c0c]"></div>
    </div>
  )
}

export default memo(Header)
