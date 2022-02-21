
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import image1 from './image1.jpg';
import './App.css';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import React, {useState} from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export function Home() {
  
  return (
    <><><><div className="App">
    <header className="App-header">
        <img src={image1} className="App-header" alt="smiley"
        height="1" />
   </header>

    </div><Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>}
          action={<IconButton aria-label="settings">

          </IconButton>}
          title="Rena Tanenbaum"
          subheader="Computer Science Major, Touro College" />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Rena is currently teaching Navi in TAG, 8th grade.
            She is finishing her Computer Science degree from Touro College,
            after which she hopes to teach full time.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="I know Rena">

          </IconButton>
          <IconButton aria-label="share">

          </IconButton>

        </CardActions>
      </Card></>
      <Stack sx={{ width: '100%' }} spacing={2}>
        
        <Alert severity="warning">WARNING — Make sure to check with Rena before continuing to browse her site!</Alert>
        
      </Stack></>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Family" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">

        </nav>
      </Box></>
    
  );
}
 
