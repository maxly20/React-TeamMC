import { AppBar, Toolbar } from '@material-ui/core';

const Header = ({ user }) => {
  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: '#98c5e9',
        boxShadow: 'none',
        padding: '10px 0',
        borderBottom: '2px solid #00285e',
      }}
    >
      <Toolbar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div className='header_logo'></div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
