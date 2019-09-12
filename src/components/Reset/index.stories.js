// import React from 'react'
// import { switchProp, prop, withProp, ifNotProp } from 'styled-tools'
// import styled, { css } from 'styled-components'
// import { storiesOf } from '@storybook/react'

// import { GROUPS } from '@helpers/hierarchySeparators'
// import { Container } from '@helpers/components/Container'

// import { theme } from '@components/Theme'
// import { Reset } from '@components/Reset'

// const setSize = size => `${size}px`
// const fontChoose = css`
//   ${switchProp('family', {
//     inter: css`
//       font-family: ${theme.typography.inter};
//     `,
//     roboto: css`
//       font-family: ${theme.typography.roboto};
//     `
//   })}

//   ${ifNotProp(
//     'family',
//     css`
//       font-family: ${theme.typography.inter};
//     `
//   )}
// `

// const H1 = styled.h1`
//   color: ${theme.colors.mirage};
//   font-size: ${withProp(prop('size', '36'), setSize)};

//   ${fontChoose}
// `

// storiesOf(`${GROUPS.TOKENS}|Typography`, module)
//   .addDecorator(story => (
//     <Container>
//       <Reset />
//       {story()}
//     </Container>
//   ))
//   .add('Default', () => (
//     <>
//       <H1>H1 Title Heading Sub Text</H1>
//     </>
//   ))
