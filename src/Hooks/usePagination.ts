
import { tableDataI } from '../TableData/TableData'
import { useState } from 'react'
export const usePagination = (dataEntries: tableDataI[], elementsOnPage = 50) => {

    const amountOfPages = Math.ceil(dataEntries.length / elementsOnPage)

    const [actualPageIdx, setActualPageIdx] = useState<number>(1)
    const [isBusy, setIsBusy] = useState<boolean>(false)

    const lastPageIdx = amountOfPages

    const goToNextPage = () => {
        setActualPageIdx((actualPageIdx) => Math.min(actualPageIdx + 1, lastPageIdx))
        imBusy()
    }
    const goToPrevPage = () => {
        setActualPageIdx((actualPageIdx) => Math.max(actualPageIdx - 1, 1))
        imBusy()
    }
    const goToPage = (page: number) => {
        const pageNumber = Math.max(1, page)
        setActualPageIdx(() => Math.min(pageNumber, lastPageIdx));
        imBusy()
    }
    const goToLastPage = () => {
        setActualPageIdx(lastPageIdx)
        imBusy()
    }
    const goToFirstPage = () => {
        setActualPageIdx(1)
        imBusy()
    }

    const imBusy = () => {
        setIsBusy(true)
        setTimeout(() => {
            setIsBusy(false)
        }, 333);
    }

    const begin = (actualPageIdx - 1) * elementsOnPage
    const end = begin + elementsOnPage
    const entriesOnSelectedPage = dataEntries.slice(begin, end)



    return [{
        actualPageIdx,
        lastPageIdx,
        entriesOnSelectedPage,
        isBusy,
        goToFirstPage,
        goToPrevPage,
        goToPage,
        goToNextPage,
        goToLastPage,
        amountOfPages
    }]
}