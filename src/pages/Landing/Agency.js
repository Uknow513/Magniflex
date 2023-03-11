import React from 'react';

import AgencyBanner from '../../components/Agency/AgencyBanner';
import AgencyPannel from '../../components/Agency/AgencyPannel';
import BigBanner from '../../components/Agency/BigBanner';
import AgencySleep from '../../components/Agency/AgencySleep';
import AgencyQuality from '../../components/Agency/AgencyQuality';
import AgencyLand from '../../components/Agency/AgencyLand';

import {
    Box,
} from '@mui/material';

const Agency = () => {

    return (
        <Box id='aziendablock' sx={{paddingBottom: '3rem'}}>
            <AgencyBanner />
            <AgencyPannel />
            <BigBanner />
            <AgencySleep />
            <AgencyQuality />
            <AgencyLand />
        </Box>
    )
}

export default Agency;