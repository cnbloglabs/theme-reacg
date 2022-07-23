import './index.scss'

// 只触发一次向上或向下
// 如果又重新反向滚动则再触发一次

export default () => {
  function scrollFunc() {
    let scrollDirection, scrollAction

    if (!scrollAction) {
      scrollAction = window.pageYOffset
    }

    const diff = scrollAction - window.pageYOffset

    if (diff < 0) {
      scrollDirection = 'down'
    } else if (diff > 0) {
      scrollDirection = 'up'
    }

    scrollAction = window.pageYOffset
    return scrollDirection
  }

  let originalDir

  $(window).scroll(() => {
    const direction = scrollFunc()
    if (direction && originalDir !== direction) {
      if (direction === 'down') {
        $('#header').addClass('header-hide') // 头部导航隐藏
        $('#catalog').addClass('catalog-scroll-up') // 当头部导航隐藏目录随之向上移动
      } else {
        $('#header').removeClass('header-hide')
        $('#catalog').removeClass('catalog-scroll-up')
      }
      originalDir = direction
    }
  })
}
