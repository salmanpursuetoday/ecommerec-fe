import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

export default function Footer() {
  return (
      <AppBar position="static" style={{background: '#000000'}}>
        <Container maxWidth="md">
          <Toolbar>
          </Toolbar>
        </Container>
      </AppBar>
  )
}