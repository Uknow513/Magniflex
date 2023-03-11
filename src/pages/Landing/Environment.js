import React from 'react';

import Sustain from '../../components/Environment/Sustain';
import Revolution from '../../components/Environment/Revolution';

import {
    Box,
} from '@mui/material';

const Environment = () => {

    return (
        <Box id='ambienteblock' sx={{paddingBottom: '3rem'}}>
            <Sustain />
            <Revolution />
        </Box>
    )
}

export default Environment;