import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GenericTemplate from "../templates/GenericTemplate";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(5),
        width: '25ch',
      },
      backgroundColor: '#ffffff',
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <GenericTemplate title="BasicTextFields">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </GenericTemplate>
  );
}