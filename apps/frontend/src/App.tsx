import React from 'react';
import { Box, Stack } from '@mui/material';
import { Layout } from './components/Layout';
import { Link } from 'react-router';

function App() {
  return (
    <Layout>
      <Box>
        <Stack spacing={2} justifyContent="center">
          <Link to="/products-management">
            Movimentações
          </Link>
          <Link to="/products-report">
            Relatórios
          </Link>
        </Stack>
      </Box>
    </Layout>
  );
}

export default App;
