
import './App.css';
import PaginatedTable from './components/PaginatedTable/PaginatedTable';
import Pagination from './components/Pagination/Pagination';
import { tableData as dataEntries } from './TableData/TableData'
import { usePagination } from './Hooks/usePagination'



function App() {
  const [
    { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy,
      goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage, amountOfPages }
  ] = usePagination(dataEntries)


  return (
    <div className="App">
      <PaginatedTable dataEntries={entriesOnSelectedPage} />
      <Pagination
        paginationActions={{ goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }}
        paginationState={actualPageIdx}
        amountOfPages={amountOfPages}
      />
    </div>
  );
}

export default App;
