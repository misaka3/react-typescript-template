import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GenericTemplate from "../templates/GenericTemplate";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
      backgroundColor: '#ffffff',
    },
  }),
);

export default function ValidationTextFields() {
  const classes = useStyles();

  return (
    <GenericTemplate title="ValidationTextFields">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="outlined"
          />
        </div>
      </form>
    </GenericTemplate>
  );
}
