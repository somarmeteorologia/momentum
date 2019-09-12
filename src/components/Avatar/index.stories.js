// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { withKnobs } from '@storybook/addon-knobs'

// import { GROUPS } from '@helpers/hierarchySeparators'
// import { Container } from '@helpers/components/Container'

// import { Reset } from '@components/Reset'
// import { Avatar } from '@components/Avatar'
// import img from '../../resources/img/avatar.png'

// import markdown from './index.md'

// storiesOf(`${GROUPS.COMPONENTS}|Avatar`, module)
//   .addDecorator(story => (
//     <Container>
//       <Reset />
//       {story()}
//     </Container>
//   ))
//   .add(
//     'Default',
//     () => (
//       <>
//         <Avatar
//           src={img}
//           size={Avatar.size.small}
//           radius={Avatar.radius.circle}
//         />
//         <Avatar
//           src={img}
//           size={Avatar.size.medium}
//           radius={Avatar.radius.circle}
//         />
//         <Avatar
//           src={img}
//           size={Avatar.size.large}
//           radius={Avatar.radius.circle}
//         />

//         <Avatar
//           src={img}
//           size={Avatar.size.small}
//           radius={Avatar.radius.square}
//         />
//         <Avatar
//           src={img}
//           size={Avatar.size.medium}
//           radius={Avatar.radius.square}
//         />
//         <Avatar
//           src={img}
//           size={Avatar.size.large}
//           radius={Avatar.radius.square}
//         />
//       </>
//     ),
//     {
//       notes: {
//         markdown
//       }
//     }
//   )
