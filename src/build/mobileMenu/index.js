import './index.scss'
import { unpass } from '../../common/utils/helpers'

function build() {
  $('body').append(
    '<div id=\'side-btn-wrap\'><div id=\'side-btn\'><div id=\'side-btn-burger\'></div></div></div>',
  )
}

function toggle() {
  $('#side-btn').click(function (e) {
    e.preventDefault()
    if ($(this).hasClass('side-btn-active')) {
      $(this).removeClass('side-btn-active')
      $('#sideBar').hide()
      setTimeout(() => {}, 500)
      unpass(true)
      $('html').css('scroll-behavior', 'smooth')
    } else {
      $(this).addClass('side-btn-active')
      $('#sideBar').show()
      unpass(false)
      $('html').css('scroll-behavior', 'unset')
    }
  })
}

function mobileMenu() {
  build()
  toggle()
}

export default mobileMenu
