import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes , Route } from "react-router-dom";

// Pages
import Landing from "../pages/Landing";

const Routing = () => {
    return (
        <Routes>
            <Route path="/*" element={<Landing />} />
        </Routes>
    );
}

Routing.propTypes = {
};

export default memo(Routing);
