import './index.scss'
import { useLinksOptions } from '@acnb/options'

function buildCopyright() {
  const nickName = $('#profile_block a:first').text().trim()

  const el = `<div id='copyright'>
                    <span>Copyright © ${new Date().getFullYear()} ${nickName}</span>
                    <span> Powered by you 🌊 Theme in ${'acnb'.link('#')}</span>
                </div>`

  $('#footer').empty().append(el)
}

function buildCustomLinks(devOptions) {
  /**
   * 兼容旧的配置 Array<Link>
   * 当前推荐的配置类型为
   *    {
   *      enable: boolean;
   *      value: Array<Link>;
   *    }
   */
  function isOldConfig(userConfig) {
    for (const [key] of Object.entries(userConfig)) {
      if (!Number.isNaN(parseInt(key))) {
        return true
      }
    }
    return false
  }

  let links
  const userConfig = useLinksOptions()
  if (isOldConfig(userConfig)) {
    links = []
    for (const [key, value] of Object.entries(userConfig)) {
      if (!Number.isNaN(parseInt(key))) {
        links.push(value)
      }
    }
  } else {
    const { enable, value } = userConfig
    links = value
    if (!enable) { return }
  }

  const $links = $('<ul id="links"></ul>')
  for (const link of links) {
    $links.append(`<li><a href='${link.url ? link.url : link.link}'>${link.title ? link.title : link.name}</a></li>`)
  }
  $('#footer').prepend($links.prop('outerHTML'))
}

export const footer = (theme, devOptions) => {
  buildCopyright()
  buildCustomLinks(devOptions)
}
