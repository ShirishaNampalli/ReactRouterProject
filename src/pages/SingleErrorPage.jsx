import React from 'react'
import { useRouteError } from 'react-router-dom'

const SingleErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
      Something went wrong.
    </div>
  )
}

export default SingleErrorPage;
