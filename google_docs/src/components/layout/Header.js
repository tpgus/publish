import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const LEFT_MENUS = [
  {
    title: '개요',
  },
  {
    title: '특징',
  },
  {
    title: '보안',
  },
  {
    title: '가격',
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
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <div className={cx('logoWrapper')}>로고</div>
        <div className={cx('nav-link')}>
          {LEFT_MENUS.map((menu) => (
            <div className={cx('link')}>{menu.title}</div>
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
