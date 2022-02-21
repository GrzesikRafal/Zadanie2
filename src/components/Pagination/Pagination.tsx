import { FC, FormEventHandler, useEffect, useState } from 'react'
import './Pagination.css'

interface paginationActionsI {
    goToFirstPage: () => void;
    goToPrevPage: () => void;
    goToPage: (n: number) => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
}

interface Props {
    paginationState: number;
    paginationActions: paginationActionsI
    amountOfPages: number
}

const Pagination: FC<Props> = ({ paginationState, paginationActions, amountOfPages }) => {
    const { goToLastPage, goToFirstPage, goToPrevPage, goToNextPage, goToPage } = paginationActions

    const [pageSwitch, setSwitchPage] = useState<number>(1)

    const switchToPage: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        goToPage(pageSwitch)
    }
    const handlePage: FormEventHandler = (e) => {
        e.preventDefault()
        let target = e.target as HTMLInputElement;
        setSwitchPage(parseInt(target.value))
    }

    useEffect(() => { console.log(pageSwitch) }, [pageSwitch])

    return (
        <div className='pagination'>
            <p>{`Page ${paginationState}(${amountOfPages})`}</p>
            <div >
                <button onClick={goToFirstPage}>First Page</button>
                <button onClick={goToPrevPage}>{'<'}</button>
                <button onClick={goToNextPage}>{'>'}</button>
                <button onClick={goToLastPage}>Last page</button>
            </div >
            <form onSubmit={switchToPage}>
                <label htmlFor="goToPage">Select page</label>
                <select
                    onChange={handlePage}
                    name="pages"
                    id="goToPage">
                    {[...Array(amountOfPages)].map((element, index) => (
                        <option
                            value={index + 1}
                            key={index}
                        >{index + 1}
                        </option>
                    ))
                    }
                </select>
                <button type="submit">Go To Page</button>

            </form>
        </div>
    )
}

export default Pagination