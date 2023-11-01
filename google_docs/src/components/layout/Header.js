import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const LEFT_MENUS = [
  {
    title: '개요',
    anchor: '#overview',
  },
  {
    title: '특징',
    anchor: '#features',
  },
  {
    title: '보안',
    anchor: '#security',
  },
  {
    title: '가격',
    anchor: '#pricing',
  },
];

const RIGHT_MENUS = [
  {
    title: '로그인',
    url: '/login',
  },
  {
    title: 'Docs로 이동',
    url: '/docs',
  },
  {
    title: '업무용 Docs 사용해 보기',
    url: '/docs/business',
  },
];

const Header = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const location = useLocation();

  console.log(location);

  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <div
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          onClick={() => {}}
          className={cx('logoWrapper')}>
          <img
            src="https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4"
            alt="logo"
          />
          <span className={cx({ hover: isMouseOver })}>Google</span>
          &nbsp;
          <span>Docs</span>
        </div>
        <div className={cx('nav-link')}>
          {LEFT_MENUS.map((menu) => (
            <a href={menu.anchor} className={cx(['link', { highlight: location.hash === menu.anchor }])}>
              {menu.title}
            </a>
          ))}
        </div>
      </div>
      <div className={cx('right')}>
        <div className={cx('util')}>도구 더보기</div>
        {RIGHT_MENUS.map((menu) => (
          <div className={cx('menu')}>{menu.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Header;
