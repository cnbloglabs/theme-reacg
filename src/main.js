import './style/index.scss'
import { createTheme } from '@acnb/core'
import {
  background,
  catalog,
  charts,
  clickEffects,
  colorMode,
  commentsAvatars,
  darkMode,
  donation,
  emoji,
  imagePreview,
  license,
  live2d,
  lock,
  musicPlayer,
  notice,
  postBottomImage,
  postMessage,
  postTopImage,
  qrcode,
  signature,
  tools,
  webTag,
} from '@acnb/plugins'
import build from './build'

createTheme()
  .use(build)
  .use(
    colorMode,
    {
      enable: true,
      color: '#FB7299',
    },
  )
  .use(
    tools,
    {
      enable: true,
    },
  )
  .use(
    imagePreview,
    {
      enable: true,
    },
  )
  .use(
    live2d,
    {
      enable: true,
    },
  )
  .use(
    musicPlayer,
    {
      enable: true,
    },
  )
  .use(
    clickEffects,
    {
      enable: true,
    },
  )
  .use(
    webTag,
    {
      enable: false,
    },
  )
  .use(
    commentsAvatars,
    {
      enable: true,
    },
  )
  .use(
    signature,
    {
      enable: false,
    },
  )
  .use(
    license,
    {
      enable: true,
    },
  )
  .use(
    emoji,
    {
      enable: true,
    },
  )
  .use(
    lock,
    {
      enable: false,
    },
  )
  .use(
    postMessage,
    {
      enable: false,
    },
  )
  .use(
    postTopImage,
    {
      enable: false,
    },
  )
  .use(
    postBottomImage,
    {
      enable: false,
    },
  )
  .use(
    qrcode,
    {
      enable: false,
    },
  )
  .use(
    charts,
    {
      enable: true,
      labels: [
        'Vue',
        'React',
        'Flutter',
        'Java',
        'NodeJs',
        'TypeScript',
        'CSS',
      ],
      datasets: [
        {
          label: 'My First Chart',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
      ],
    },
  )
  .use(
    donation,
    {
      enable: false,
    },
  )
  .use(
    notice,
    {
      enable: true,
    },
  )
  .use(
    darkMode,
    {
      enable: true,
    },
  )
  .use(
    background,
    {
      enable: false,
    },
    {
      opacitySelector: '#navigator,#footer,#main',
    },
  )
  .use(
    catalog,
    {
      enable: true,
    },
    {
      mountedNode: '#main',
      fn: 'prepend',
    },
  )
