import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/searchForm';

const SearchForm = () => {
  const navigate = useNavigation();
  const isSearching = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form className="form1">
        <div className='form-row'>
            <input type='text' name="search" defaultValue="Margarita" className='formInput'/>
            <button className='btn'>{isSearching? "Searching" : "Search" }</button>
        </div>
      </Form>
    </Wrapper>
  )
}

export default SearchForm;
