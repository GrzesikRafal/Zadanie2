import { FC } from 'react'
import { tableDataI } from '../../TableData/TableData'
import './PaginatedTable.css'

interface Props {
    dataEntries: tableDataI[]
}

const PaginatedTable: FC<Props> = ({ dataEntries }) => {
    return (
        <>
            <h1>Paginated Table</h1>
            <div>
                {dataEntries.map(element => (
                    <div
                        className='table__row'
                        key={element.number}
                    >
                        <span>
                            {element.number}
                        </span>
                        <span>
                            {element.text}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PaginatedTable