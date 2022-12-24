import "./sidebar.css"
import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton} from "@material-ui/core"
import MenuIcon from "@mui/icons-material/Menu"

//check the package.json to see all the materialui packages i installed for this to work. You may need to restart terminal after installing them.
//i have to learn material-ui to understand how to set up the styling so it works.
const Sidebar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
  <>
  <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
    <MenuIcon />
  </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}> {/*this means that the drawer will open whenever "isDrawerOpen" is true. And whenever the drawer closes, "isDrawerOpen is set to false" (the drawer closes whenever the user clicks outside the drawer) */}
        <Box p={2} width="250px" textAlign="center" role="presentation">
           <Typography variant="h6" component="div">Side Panel</Typography>
        </Box>
    </Drawer>
  </>
  )
}

export default Sidebar