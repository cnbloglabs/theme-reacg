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
  const config = useLinksOptions(devOptions)

  if (config.links && config.links.length) {
    const $links = $('<ul id="links"></ul>')
    for (const { title, url } of config.links) {
      $links.append(`<li><a href='${url}'>${title}</a></li>`)
    }
    $('#footer').prepend($links.prop('outerHTML'))
  }
}

export const footer = (theme, devOptions) => {
  buildCopyright()
  buildCustomLinks(devOptions)
}
