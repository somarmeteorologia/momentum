import React, { memo, useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { prop } from 'styled-tools'
import ReactTable from 'react-table'
import withFixedColumns from 'react-table-hoc-fixed-columns'

import { Icon } from '@components/Icon'
import Pagination from './Pagination'

import 'react-table/react-table.css'
import 'react-table-hoc-fixed-columns/lib/styles.css'

const ReactTableFixedColumns = withFixedColumns(ReactTable)

const Content = styled.div`
  width: 100%;
  font-family: ${prop('theme.font.family.inter')};

  .ReactTable {
    width: 100%;
    border: none;
    background-color: ${prop('theme.datatable.bg.primary')};
    color: ${prop('theme.datatable.text.primary')};

    .rt-thead {
      &.-header {
        box-shadow: none;
        border-bottom: ${prop('theme.datatable.border.primary')};
      }

      .rt-th {
        font-weight: ${prop('theme.font.weight.bold')};
        font-size: ${prop('theme.font.size.fourteen')};
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        white-space: pre-wrap;
        border-right: ${prop('theme.datatable.border.primary')} !important;

        &.-sort-asc,
        &.-sort-desc {
          box-shadow: none;
        }
      }
    }

    .rt-tbody {
      .rt-tr-group {
        border-bottom: ${prop('theme.datatable.border.primary')};
      }

      .rt-td {
        font-size: ${prop('theme.font.size.twelve')};
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        transition: background-color 0.1s ease-in;
        border-right: ${prop('theme.datatable.border.primary')} !important;
      }
    }

    .rt-tr:hover .rt-td {
      background-color: ${prop('theme.datatable.bg.rowHover')};
      color: ${prop('theme.datatable.text.hover')};
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DataTable = memo(({ data, columns, size, ...props }) => {
  const { datatable } = useContext(ThemeContext)
  const [hover, setHover] = useState({ bg: null, accessor: null })

  const renderHeader = ({ Header, accessor, sortable }) => (
    <Container
      onMouseEnter={() => setHover({ bg: datatable.bg.columnHover, accessor })}
      onMouseLeave={() => setHover({ bg: null, accessor: null })}
    >
      {Header}
      {sortable && (
        <Icon
          name="arrow"
          height={12}
          width={12}
          left={10}
          color={datatable.icon.primary}
        />
      )}
    </Container>
  )

  const getStyle = ({ accessor, textAlign }) => ({
    backgroundColor: hover.accessor === accessor && hover.bg,
    justifyContent: textAlign ? textAlign : 'center'
  })

  const newColumns = columns.map(column => ({
    ...column,
    Header: renderHeader(column),
    headerStyle: getStyle(column),
    getProps: () => ({
      style: getStyle(column)
    }),
    columns: column.columns
      ? column.columns.map(subColumn => ({
          ...subColumn,
          Header: renderHeader(subColumn),
          headerStyle: getStyle(subColumn),
          getProps: () => ({
            style: getStyle(subColumn)
          })
        }))
      : null
  }))

  const showPagination = size ? size < data.length : false

  return (
    <Content>
      <ReactTableFixedColumns
        data={data}
        columns={newColumns}
        defaultPageSize={size || data.length}
        sortable={false}
        showPagination={showPagination}
        PaginationComponent={Pagination}
        {...props}
      />
    </Content>
  )
})

DataTable.propTypes = {
  size: PropTypes.number,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}
