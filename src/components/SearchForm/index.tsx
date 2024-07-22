import { CContainer, CFormInput } from '@coreui/react';
import { SearchFormProps } from './interfaces';

const SearchForm = ({ setSearchedMovie }: SearchFormProps) => {
   return (
      <CContainer className="p-0 pb-4 pt-3 d-flex align-items-start">
         <CFormInput
            type="search"
            id="searchMovieInput"
            placeholder="Find Movie"
            aria-describedby="exampleFormControlInputHelpInline"
            onChange={(e) => setSearchedMovie(e.target.value)}
         />
      </CContainer>
   );
};

export default SearchForm;
