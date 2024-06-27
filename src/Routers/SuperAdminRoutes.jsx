import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdmin from '../SuperAdmin/SuperAdmin';

const SuperAdminRoutes=()=>{
    return <>
        <Routes>
            <Route path='*' element={<SuperAdmin/>}/>
        </Routes>
    </>
}

export default SuperAdminRoutes;