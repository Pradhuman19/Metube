import {Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () =>
  (
   <Stack
   direction="row"
   alignItems= "center"
   p={2}
   sx={{position: 'sticky',background:'#000', top: 0
     }}
  >
  <Link to="/" style={{display: 'flex' ,alignItems:'centre'}}>
    <img src={logo} alt="logo" height={45} />
  </Link>
  <span style={{marginLeft:'auto',marginRight:'auto'}}><SearchBar /></span>
  </Stack>
  );

export default Navbar
