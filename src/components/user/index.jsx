import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../store/actions/User';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { styles } from './styles';

export default function User({id}) {

  const dispatch = useDispatch();
  const {
    user,
    loading: userLoading,
  } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(getUserProfile(id))
  }, [dispatch,id])

  return (
    <Box sx={styles.box}>
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        {userLoading? <Box sx={styles.loader}>
          <CircularProgress />
        </Box> 
        :<>
        <Box sx={styles.center}>
        <Avatar sx={styles.avatar} alt="" src={user?.data?.avatar} />
        </Box>
        <Box sx={styles.details}>
        <Box>
        <Typography sx={styles.text1}  variant="h5" component="div">
          id 
        </Typography>
        <Typography sx={styles.text1} variant="h5" component="div">
          First Name
        </Typography>
        <Typography sx={styles.text1} variant="h5" component="div">
          Last Name
        </Typography>
        <Typography sx={styles.text1} variant="h5" component="div">
          Email
        </Typography>
        </Box>
        <Box>
          <Typography sx={styles.text3}  variant="h5" component="div">
          :
          </Typography>
          <Typography sx={styles.text3}  variant="h5" component="div">
          :
          </Typography>
          <Typography sx={styles.text3}  variant="h5" component="div">
          :
          </Typography>
          <Typography sx={styles.text3}  variant="h5" component="div">
          :
          </Typography>
        </Box>
        <Box>
          <Typography sx={styles.text2} variant="h5" component="div">{user?.data?.id}</Typography>
          <Typography sx={styles.text2} variant="h5" component="div">{user?.data?.first_name}</Typography>
          <Typography sx={styles.text2} variant="h5" component="div">{user?.data?.last_name}</Typography>
          <Typography sx={styles.text2} variant="h5" component="div">{user?.data?.email}</Typography>
        </Box>
        </Box>
        </>
      }
      </CardContent>
    </Card>
    </Box>
  )
}
