import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Content = styled.div`
  width: ${prop('width')}px;
  height: ${prop('height')}px;
  position: relative;

  .circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: ${prop('color')};
      border-radius: ${prop('theme.border.radius.fifty')};
      animation: bounceDelay 1.2s infinite ease-in-out both;
    }
  }

  .circle2 {
    transform: rotate(30deg);

    &::before {
      animation-delay: -1.1s;
    }
  }
  .circle3 {
    transform: rotate(60deg);

    &:before {
      animation-delay: -1s;
    }
  }
  .circle4 {
    transform: rotate(90deg);

    &:before {
      animation-delay: -0.9s;
    }
  }
  .circle5 {
    transform: rotate(120deg);

    &:before {
      animation-delay: -0.8s;
    }
  }
  .circle6 {
    transform: rotate(150deg);

    &:before {
      animation-delay: -0.7s;
    }
  }
  .circle7 {
    transform: rotate(180deg);

    &:before {
      animation-delay: -0.6s;
    }
  }
  .circle8 {
    transform: rotate(210deg);

    &:before {
      animation-delay: -0.5s;
    }
  }
  .circle9 {
    transform: rotate(240deg);

    &:before {
      animation-delay: -0.4s;
    }
  }
  .circle10 {
    transform: rotate(270deg);

    &:before {
      animation-delay: -0.3s;
    }
  }
  .circle11 {
    transform: rotate(300deg);

    &:before {
      animation-delay: -0.2s;
    }
  }
  .circle12 {
    transform: rotate(330deg);

    &:before {
      animation-delay: -0.1s;
    }
  }

  @keyframes bounceDelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`

export default function Loading({ width, height, color }) {
  return (
    <Content color={color} height={height} width={width}>
      <div className="circle1 circle" />
      <div className="circle2 circle" />
      <div className="circle3 circle" />
      <div className="circle4 circle" />
      <div className="circle5 circle" />
      <div className="circle6 circle" />
      <div className="circle7 circle" />
      <div className="circle8 circle" />
      <div className="circle9 circle" />
      <div className="circle10 circle" />
      <div className="circle11 circle" />
      <div className="circle12 circle" />
    </Content>
  )
}
