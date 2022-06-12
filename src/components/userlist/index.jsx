import React,{useState, useEffect} from 'react'
import { styles } from './styles'
import { useDispatch, useSelector } from "react-redux";
import {getAllUsers} from '../../store/actions/User'

import User from '../user';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function UserList() {

const [page, setPage] = useState(1);
const [id, setId] = useState("")

const { users, loading } = useSelector((state) => state.allUsers);  
const dispatch = useDispatch(); 

useEffect(() => {
    dispatch(getAllUsers(page))
  }, [dispatch,page])

  return (
    <>
        <Container maxWidth="lg" sx={styles.box}>
        {loading?<CircularProgress />:
            <div>
                {id===""?
                <Typography variant="h1" component="div" sx={styles.selectText}>
                Please Select the User
                </Typography>:
                <User id={id}/>
                }
                <Box >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {users?.data?.map((e) => (
                        <Grid item xs={2} sm={4} md={4} key={e.id}>
                            <Paper sx={styles.paper} elevation={2}>
                                <div>
                                <Typography variant="h1" component="div" sx={styles.user}>
                                User : {e.id}
                                </Typography>
                                <Button 
                                variant="contained" disabled={id===e.id} sx={styles.viewBtn} onClick={()=>{setId(e.id)}}>View</Button>
                                </div>
                            </Paper>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={styles.pageNavigation}>
                <Stack direction="row" spacing={15}>
                <Button variant="contained" disabled={page===1} sx={styles.pageBtn} onClick={()=>{setPage(page-1)}}>Previous</Button>
                <Typography variant="h1" component="div" sx={styles.pageText}>Page : {users?.page}</Typography>
                <Button variant="contained" disabled={page===users?.total_pages} sx={styles.pageBtn} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Stack>
                </Box>
        </div>
    }
        </Container>
    </>
  )
}
