import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${prop('theme.navigation.separator.primary')};
  margin: 10px 0;
`
