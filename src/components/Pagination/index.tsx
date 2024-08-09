import { CPagination, CPaginationItem } from '@coreui/react';
import { PaginationProps } from './interfaces';

const Pagination = ({
   currentPage,
   totalPages,
   handleOnPageChange,
}: PaginationProps) => {
   console.log('currentPage', currentPage);
   return (
      <CPagination aria-label="Pagination">
         <CPaginationItem
            disabled={currentPage === 1}
            onClick={() => handleOnPageChange(currentPage - 1)}
         >
            Previous
         </CPaginationItem>
         {Array.from({ length: totalPages }).map((_, index) => (
            <CPaginationItem
               key={index + 1}
               active={currentPage === index + 1}
               onClick={() => handleOnPageChange(index + 1)}
            >
               {index + 1}
            </CPaginationItem>
         ))}
         <CPaginationItem
            disabled={currentPage === totalPages}
            onClick={() => handleOnPageChange(currentPage + 1)}
         >
            Next
         </CPaginationItem>
      </CPagination>
   );
};

export default Pagination;
