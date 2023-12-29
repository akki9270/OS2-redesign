import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

const PageNotFound = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Stack height="100%" alignItems="center" justifyContent="center">
          <Typography variant={"h1"} >
            404 Error
          </Typography>
          <Typography variant={"h3"} >
            Page Not Found
          </Typography>
          <Grid container justifyContent={"center"}>
            <Grid item>
              {`Click here `}
              <RouterLink to="/login">                
                <Link onClick={() => { }} variant="body2" >
                  {"Login"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
};

export default PageNotFound;