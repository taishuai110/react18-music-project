import styled from 'styled-components'
import sprite_01 from '@/assets/image/sprite_01.png'

export const HeaderLeft = styled.div`
  .title-list {
    .item {
      a {
        display: block;
        height: 100%;
        padding: 0 20px;
        color: #ccc;
      }

      &:last-of-type a {
        position: relative;

        &::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-position: -190px 0;
          top: 20px;
          right: -15px;
          background-image: url(${sprite_01});
        }
      }
      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`
