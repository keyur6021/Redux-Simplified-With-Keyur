import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];

function Navbar() {

    const navigate = useNavigate()

    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, black, #30305e)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Keyur with Redux
                        </Typography>
                    </Box>
                    <Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button onClick={() => navigate('/product')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Products
                            </Button> <Button onClick={() => navigate('/all')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Lists
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Dummy
                            </Button>
                        </Box>
                    </Box>



                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;