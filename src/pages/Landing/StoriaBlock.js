import React from 'react';

import HistoryIntro from '../../components/StoriaBlock/HistoryIntro.js';
import Laboratory from '../../components/StoriaBlock/Laboratory.js';
import HistoryCarousel from '../../components/StoriaBlock/HistoryCarousel.js';
import HistoryCompany from '../../components/StoriaBlock/HistoryCompany.js';
import HistoryPannel from '../../components/StoriaBlock/HistoryPannel.js';

import {
    Box,
} from '@mui/material';

const StoriaBlock = () => {

    return (
        <Box id="storiaBlock" sx={{paddingBottom: '3rem'}}>
            <HistoryIntro />
            <Laboratory />
            <HistoryCarousel />
            <HistoryCompany />
            <HistoryPannel />
        </Box>
    )
}

export default StoriaBlock;