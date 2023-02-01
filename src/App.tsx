import { Box } from '@mui/material';
import { useLoginContext } from './contexts/LoginContext';
import { LoginPage } from './pages/LoginPage';
function App() {
  const {isLoggedIn} = useLoginContext();
  console.log({isLoggedIn});
  return <Box height="100%">
    {!isLoggedIn && <LoginPage/>}
    {isLoggedIn && <Box>Hello,World!</Box>}
  </Box>;
}

export default App;
