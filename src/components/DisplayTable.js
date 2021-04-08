import React, { useEffect, useMemo } from 'react'
import { useTable } from 'react-table';
import { fetchTodos } from '../redux/todosAction';
import { COLUMNS } from './column';
import { connect } from 'react-redux';
import './DisplayTable.css';

function DisplayTable({ todosData, fetchTodos }) {
    useEffect(() => {
        fetchTodos()
    }, [])

    console.log(todosData)
    
    console.log(COLUMNS)
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => todosData, [todosData]); 
    console.log(columns);
    console.log(data)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ 
        columns, 
        data
    })

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {
                                            column.render('Header')
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>
                                            {
                                                cell.render('Cell')
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

const mapStateToProps = state => {
    return{
        todosData: state.todosData
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchTodos: () => dispatch(fetchTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTable);
