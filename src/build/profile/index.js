import './index.scss'
import { useThemeOptions } from '@acnb/options'
import { poll } from '../../common/utils/helpers'
import {
  getBlogAge,
  getBlogName,
  getFollowers,
  getFollowing,
} from '../../common/utils/cnblog'
import {
  followersDetailsUrl,
  followingDetailsUrl,
  index,
  userDetails,
} from '../../common/constants/links'

function createAvatar() {
  const { avatar } = useThemeOptions()
  return `<img class='custom-avatar' src='${avatar}' />`
}

function createInfo() {
  const name = getBlogName()
  const date = getBlogAge()
  const followers = getFollowers()
  const following = getFollowing()

  return (
    `<div class="custom-info">
        <a class='custom-name' href="${index}">昵称：${name}</a>
        <a href="${userDetails}">园龄：${date}</a>
        <a href="${followersDetailsUrl}">粉丝：${followers}</a>
        <a href="${followingDetailsUrl}">关注：${following}</a>
    </div>`
  )
}

function buildProfile() {
  const avatar = createAvatar()
  const info = createInfo()
  $('.custom-profile').append(avatar).append(info)
}

export default () => {
  $('#sidebar_news_content').before(('<div class="custom-profile">'))
  poll(() => $('#profile_block>a').length, buildProfile)
}
