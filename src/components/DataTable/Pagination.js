import React, { useContext, useState, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { prop } from 'styled-tools'

import { Icon } from '@components/Icon'

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${prop('theme.datatable.pagination.bg.primary')};
  padding: 20px 0;

  .button {
    font-family: ${prop('theme.font.family.inter')};
    font-size: ${prop('theme.font.size.twelve')};
    font-weight: ${prop('theme.font.weight.regular')};
    border-radius: ${prop('theme.border.radius.four')};
    border: ${prop('theme.datatable.pagination.border.primary')};
    background-color: ${prop('theme.datatable.pagination.bg.tertiary')};
    color: ${prop('theme.datatable.pagination.text.primary')};
    transition: all 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    margin-right: 10px;
    outline: none;
    cursor: pointer;

    &.icon {
      background-color: ${prop('theme.datatable.pagination.bg.secondary')};
      border: none;
    }

    &.active {
      background-color: ${prop('theme.datatable.pagination.bg.active')};
      color: ${prop('theme.datatable.pagination.text.active')};
      font-weight: ${prop('theme.font.weight.bold')};
      border: none;
    }
  }
`

const defaultButton = props => <button {...props}>{props.children}</button>

export default function Pagination({ page, pages, onPageChange, ...props }) {
  const { datatable } = useContext(ThemeContext)
  const { PageButtonComponent = defaultButton } = props

  const filterPages = (visiblePages, totalPages) =>
    visiblePages.filter(page => page <= totalPages)

  const getVisiblePages = (page, total) => {
    if (total < 3) {
      return filterPages([1, 2], total)
    }

    if (total < 4) {
      return filterPages([1, 2, 3], total)
    } else {
      if (page % 3 >= 0 && page > 2 && page + 2 < total) {
        return [page - 1, page, page + 1]
      } else if (page % 3 >= 0 && page > 2 && page + 2 >= total) {
        return [total - 2, total - 1, total]
      } else {
        return [1, 2, 3]
      }
    }
  }

  const changePage = newPage => {
    const activePage = page + 1

    if (page === activePage) return

    const visiblePages = getVisiblePages(newPage, pages)
    setVisiblePages(filterPages(visiblePages, pages))
    onPageChange(newPage - 1)
  }

  const [visiblePages, setVisiblePages] = useState(getVisiblePages(null, pages))

  const isDisabled = pageNumber => page + 1 === pageNumber

  const getIconColor = isDisabled =>
    isDisabled
      ? datatable.pagination.text.primary
      : datatable.pagination.text.secondary

  useEffect(() => {
    setVisiblePages(getVisiblePages(null, pages))
  }, [pages])

  useEffect(() => {
    changePage(page + 1)
  }, [])

  return (
    <Content>
      <PageButtonComponent
        className="button icon"
        onClick={() => changePage(1)}
        disabled={isDisabled(1)}
      >
        <Icon
          name="left"
          color={getIconColor(isDisabled(1))}
          width={12}
          height={12}
        />
        <Icon
          name="left"
          color={getIconColor(isDisabled(1))}
          width={12}
          height={12}
          left={-6.5}
        />
      </PageButtonComponent>
      <PageButtonComponent
        className="button icon"
        onClick={() => changePage(page)}
        disabled={isDisabled(1)}
      >
        <Icon
          name="left"
          color={getIconColor(isDisabled(1))}
          width={12}
          height={12}
        />
      </PageButtonComponent>
      {visiblePages.map(page => (
        <PageButtonComponent
          key={page}
          className={isDisabled(page) ? 'button active' : 'button'}
          onClick={() => changePage(page)}
        >
          {page}
        </PageButtonComponent>
      ))}
      <PageButtonComponent
        className="button icon"
        onClick={() => changePage(page + 2)}
        disabled={isDisabled(page)}
      >
        <Icon
          name="right"
          color={getIconColor(isDisabled(pages))}
          width={12}
          height={12}
        />
      </PageButtonComponent>
      <PageButtonComponent
        className="button icon"
        onClick={() => changePage(pages)}
        disabled={isDisabled(pages)}
      >
        <Icon
          name="right"
          color={getIconColor(isDisabled(pages))}
          width={12}
          height={12}
        />
        <Icon
          name="right"
          color={getIconColor(isDisabled(pages))}
          width={12}
          height={12}
          left={-6.5}
        />
      </PageButtonComponent>
    </Content>
  )
}

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  onPageChange: PropTypes.func
}
