import React from 'react'

import style from '../styles/404.module.scss'
import qr from '../../assets/qr.svg'

import { config } from '../config'

export default () => (
  <div className={style.container}>
    <div className={style.emoji}>:(</div>
    <div className={style.content}>
      <div>
        Your browsing ran into a problem and needs to navigate. I'm not colletcing any error info, and
        then I'll not navigate for you.
      </div>
      <br />
      <div>NaN% complete</div>
      <br />
      <div className={style.qr}>
        <div>
          <img className={style.img} src={qr} alt='WoW!' />
        </div>
        <div className={style.text}>
          <p className={style.begin}>
            For more information about this issue and possible fixes, visit{' '}
            <a href={config.site.root}>{config.site.url}</a>
          </p>
          <br />
          <p className={style.begin}>If you call a support personm give them this info:</p>
          <p>Stop Code：WHY AM I A DUMB ASS</p>
        </div>
      </div>
    </div>
  </div>
)
