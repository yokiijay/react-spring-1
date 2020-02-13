/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import CenterLayout from '../components/CenterLayout'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'

export default function Index() {
  const [state, toggle] = useState(false)
  const springA = useSpring({
    scale: state ? 1.2 : 1,
    from: {
      scale: 1
    }
  })

  return (
    <CenterLayout>
      <Link href='/hover3d'>
        <AnimatedA
          style={{
            transform: springA.scale.interpolate(scale=>`scale(${scale})`)
          }}
          onMouseOver={()=>toggle(!state)}
          onMouseOut={()=>toggle(!state)}
        >
          hover3d
        </AnimatedA>
      </Link>
    </CenterLayout>
  )
}

const StyledA = styled.a`
  width: 200px;
  height: 80px;
  background: royalblue;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  display: grid;
  place-items: center;
  text-transform: uppercase;
`

const AnimatedA = animated(StyledA)
