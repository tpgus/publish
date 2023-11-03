import React from 'react';
import classNames from 'classnames/bind';

import styles from './Overview.module.scss';
import Image from '../../assets/overview.png';

const cx = classNames.bind(styles);

const Overview = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <p className={cx('title')}>Google Docs에서 함께 최상의 아이디어 구현</p>
        <p className={cx('subTitle')}>모든 기기에서 실시간으로 온라인 문서를 만들고 공동작업할 수 있습니다.</p>
        <div className={cx('buttons')}>
          <button type="button" className={cx('primary')}>
            업무용 Docs 사용해 보기
          </button>
          <button type="button" className={cx(['primary', 'ghost'])}>
            Docs로 이동
          </button>
        </div>
        <div>
          <p>계정이 없으신가요?</p>
        </div>
      </div>

      <div className={cx('right')}>
        <img src={Image} alt="overview" className={cx('image')} />
      </div>
    </div>
  );
};

export default Overview;
