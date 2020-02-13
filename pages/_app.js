/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { normalize } from 'polished'

export default function ({Component, pageProps}){
  return(
    <div>
      <Global styles={css`
        ${normalize()};
      `} />
      <Component {...pageProps} />
    </div>
  )
}
