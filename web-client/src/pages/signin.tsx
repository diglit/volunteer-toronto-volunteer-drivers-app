import React from 'react';
// Modules
import { NextPage } from 'next/types';
import { useForm } from 'react-hook-form';
// MUI Core
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


interface FormData {
  username: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(10),
  },
}));

const LoginPage: NextPage = () => {

  const classes = useStyles();

  const { handleSubmit, register } = useForm<FormData>();

  //handle submit 
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // TODO: post request with credential to user API
  })

  return (
    <Container className={classes.container} maxWidth="xs">
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography>
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
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Sign in
                </Typography>
                <TextField
                  fullWidth
                  inputRef={register({ required: true })}
                  label="Username"
                  name="username"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Password
                </Typography>
                <TextField
                  fullWidth
                  inputRef={register({ required: true })}
                  label="Password"
                  name="password"
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
              Log in
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Link href="#" onClick={e => { e.target.preventDefault }}>
                Forget your password?
                </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Link href="/signup" onClick={e => { e.target.preventDefault }}>
                Apply to Drive!
                </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default LoginPage;