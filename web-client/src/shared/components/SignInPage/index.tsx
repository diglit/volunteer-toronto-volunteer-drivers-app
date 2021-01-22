import React from 'react';
// Modules
import { NextPage } from 'next/types';
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
// MUI Core
import { Typography, Link, TextField, Grid, Container, Button } from '@material-ui/core';
import styles from './index.module.scss'

interface FormData {
  username: string;
  password: string;
}

const SignInPage: NextPage = () => {

  const { handleSubmit, register } = useForm<FormData>();
  const router = useRouter();

  //handle submit 
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch("/userapi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // check validation
        return router.push("/somewhere");
      }
    } catch (error) {
      console.error(error);
    }
  })

  return (
    <Container className={styles.container} maxWidth="xs">

      <Grid className={styles.header} container spacing={3} >
        <Grid item xs>
          <Typography variant='h6'>
            Welcome to Volunteer Driver Search
        </Typography>
          <Typography>
            Powered by:
        </Typography>
          <Typography>
            DigLit
        </Typography>
        </Grid>
      </Grid>

      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography >
                  Sign in
                </Typography>
                <TextField
                  fullWidth
                  inputRef={register({ required: true })}
                  label="Username"
                  name="username"
                  id="username"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Password
                </Typography>
                <TextField
                  fullWidth
                  inputRef={register({ required: true })}
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              color="primary"
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
          </Grid >
          <Grid className={styles.links} container >


            <Grid item xs={12}>
              <Typography>
                <Link href="#">
                  Forget your password?
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <Link href="/signup">
                  Apply to Drive!
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SignInPage;