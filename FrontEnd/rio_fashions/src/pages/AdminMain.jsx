import React from 'react'
import { Routes , Route } from 'react-router-dom'

const AdminMain = () => {
  return (
    <div>
        <Routes>
            <Route path='/admin' element={<AdminMain/>}/>
        </Routes>
    </div>
  )
}

export default AdminMain