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
import { Link } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];

function Navbar() {

    const navigate = useNavigate()

    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, black, #30305e)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="/">
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, color: 'white' }} />
                        </Link>
                        <div className="logo">
                            <div class="waviy">
                                <span className="k1">K</span>
                                <span className="--i:2">e</span>
                                <span className="--i:3">y</span>
                                <span className="--i:4">u</span>
                                <span className="--i:5">r</span>
                                <span className="--i:6">-</span>
                                <span className="k1">w</span>
                                <span className="--i:5">i</span>
                                <span className="--i:5">t</span>
                                <span className="--i:5">h</span>
                                <span className="--i:5">-</span>
                                <span className="k1">r</span>
                                <span className="--i:5">e</span>
                                <span className="--i:5">d</span>
                                <span className="--i:5">u</span>
                                <span className="--i:5">x</span>
                            </div>
                        </div>
                    </Box>
                    <Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button className='comman-btn' onClick={() => navigate('/product')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Products
                            </Button>
                            <Button className='comman-btn' onClick={() => navigate('/all')}

                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Lists
                            </Button>
                            <Button className='comman-btn' onClick={() => navigate('/home')}
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