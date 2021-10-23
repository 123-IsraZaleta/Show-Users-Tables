import React, { useState } from 'react';

import { DataTables, FormikAdd, FormikDel } from './components/UsersDynamics';

import './assets/styles.css';


const App = () => {
  const [ refreshUser, setRefreshUser ] = useState('')
  return (
    <>
      <div className = "main">
        <div className = "main__row1 d-flex">
          <div className = "add__user">
            <FormikAdd setRefreshUser = { setRefreshUser }/>
          </div>
          <div className = "remove__user ">
            <FormikDel setRefreshUser = { setRefreshUser }/>
          </div>
          </div>
        <div className = "main__row2 table-responsive">
          <DataTables refreshUser = { refreshUser }/>
        </div>
      </div>
    </>
  )
}

export default App;