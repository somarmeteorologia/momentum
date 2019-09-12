import React, { memo, useState, cloneElement } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import PropTypes from 'prop-types'
import Horizontable from 'horizontable'

import { Tab } from './Tab'

const List = styled.ul`
  background-color: ${prop('theme.tabs.bg.primary')};
  list-style-type: none;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  overflow: unset;
`

const Content = styled.div`
  color: ${prop('theme.text.primary')};
  font-family: ${prop('theme.font.family.inter')};
  position: absolute;
  top: 50px;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Tabs = memo(({ children, activeId, onChange }) => {
  const [activeTab, setActiveTab] = useState(activeId)

  const handleTabClick = id => setActiveTab(id)

  const cloneTabElement = (tab, id) =>
    cloneElement(tab, {
      onClick: () => {
        handleTabClick(id)
        onChange(id)
      },
      isActive: id === activeTab
    })

  const renderChildrenTabs = () =>
    Array.isArray(children)
      ? children.map(item => cloneTabElement(item, item.props.id))
      : cloneTabElement(children, children.props.id)

  const renderActiveTabContent = () =>
    Array.isArray(children)
      ? children.find(item => item.props.id === activeTab).props.children
      : children.props.children

  return (
    <Container>
      <Horizontable>
        <List>{renderChildrenTabs()}</List>
      </Horizontable>
      <Content>{renderActiveTabContent()}</Content>
    </Container>
  )
})

Tabs.defaultProps = {
  onChange: () => {}
}

Tabs.propTypes = {
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func
}

Tabs.Tab = Tab
