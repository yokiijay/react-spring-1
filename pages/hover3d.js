/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { animated, useSpring, interpolate, config } from 'react-spring'
import { size } from 'polished'
import CenterLayout from '../components/CenterLayout'
import { useRef } from 'react'
import transform from '../libs/transform'

export default function Hover3d() {
  const [{rotateX, rotateY, scale}, setSpring] = useSpring(() => ({
    config: config.gentle,
    rotateX: 0,
    rotateY: 0,
    scale: 1
  }))

  const cardInfo = useRef({
    pointXInCard: 0,
    pointYInCard: 0
  }).current

  const handleMouseMove = (ev)=>{
    const { target, clientX, clientY } = ev
    const { top,left,width,height,bottom,right} = target.getBoundingClientRect()

    setSpring({
      rotateX: transform(clientY, [top,bottom], [15,-15]),
      rotateY: transform(clientX, [left,right], [-15,15]),
      scale: 1.15
    })
  }

  return (
    <CenterLayout>
      <AnimatedCard
        onMouseMove={handleMouseMove}
        onMouseOut={() => setSpring({
          rotateX: 0,
          rotateY: 0,
          scale: 1
        })}
        style={{ transform: interpolate([rotateX, rotateY, scale], (x,y,s)=>`perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`) }}
      >
        <img
          src='https://images.pexels.com/photos/3558597/pexels-photo-3558597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
        />
      </AnimatedCard>
    </CenterLayout>
  )
}

const AnimatedCard = styled(animated.div)`
  ${size(400)};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`