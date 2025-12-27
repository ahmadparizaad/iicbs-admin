'use client'

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import 'simplebar/dist/simplebar.min.css';
import { Box, styled } from '@mui/material';

// Dynamically import SimpleBar on the client to avoid document/window access during SSR
const SimpleBar = dynamic(() => import('simplebar-react'), { ssr: false });

const SimpleBarStyle = styled(SimpleBar)(() => ({
  maxHeight: '100%',
  '.simplebar-scrollbar:before': { backgroundColor: '#2e2d348f' },
}));

const Scrollbar = (props) => {
  const { children, sx, ...other } = props;
  const isMobile = typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

  if (isMobile) {
    return <Box sx={{ overflowX: 'auto' }}>{children}</Box>;
  }

  return (
    <SimpleBarStyle sx={sx} {...other}>
      {children}
    </SimpleBarStyle>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  other: PropTypes.any,
};

export default Scrollbar;
