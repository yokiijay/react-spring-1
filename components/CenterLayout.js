/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const CenterLayout = ({children})=>(
  <div css={css`
    width: 100vw;
    min-height: 100vh;
    display: grid;
    place-items: center;
  `}>
    {children}
  </div>
)

export default CenterLayout