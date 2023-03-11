import React from 'react';

import Football from '../../components/Sport/Football';
import Champion from '../../components/Sport/Champion';
import TripeImage from '../../components/Sport/TripeImage';

import {
    Box,
} from '@mui/material';

const Sport = () => {

    return (
        <Box id="sportblock">
            <Football />
            <Champion />
            <TripeImage />
        </Box>
    )
}

export default Sport;