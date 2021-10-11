import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import moment from 'moment';

import TableHead from './TableHead';
import EnhancedTableToolbar from './ToolBar';
import Loader from '../Loader';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable(props) {
  const { rows, columns, loading, onDelete, onEdit } = props;
  const classes = useStyles();

  if (loading) return <div> <Loader /> </div>

  const updatedColumns = onDelete || onEdit ? [...columns, { label: 'Actions' }] : [...columns];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
            aria-label="enhanced table"
          >
            <TableHead
              classes={classes}
              rowCount={rows?.length}
              columns={updatedColumns}
            />

            <TableBody>

              {rows?.map((row,) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.name}
                  >
                    {columns?.map((item) => {
                      return item.key === 'createdAt' || item.key === 'updatedAt' ?
                        (<TableCell align={item?.align}>{moment(row[item?.key]).format("DD/MM/YYYY")}</TableCell>)
                        : (<TableCell align={item?.align}>{row[item?.key]}</TableCell>)
                    })}
                    {onDelete || onEdit ? <TableCell>
                      {onDelete && <IconButton aria-label="delete" onClick={() => onDelete(row?._id)}>
                        <DeleteIcon />
                      </IconButton>}
                      {onEdit && <IconButton aria-label="delete" onClick={() => onEdit(row)}>
                        <EditIcon />
                      </IconButton>}
                    </TableCell> : ""}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
