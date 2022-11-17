import { useState } from "react";
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { SidebarItemAndOptionsProps } from "../interfaces";


export const ItemOptions = ({ title, Icon, options }: SidebarItemAndOptionsProps) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          borderWidth: "1px", borderColor: "primary.light", borderStyle: "solid",
          borderRadius: "10px", mt: 0.5, textDecoration: "none"
        }}
      >
        <ListItemButton sx={{ borderRadius: "10px" }} onClick={() => setOpen(!open)}>
          <ListItemIcon sx={{ color: "primary.light" }}>
            {Icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ textDecoration: "none" }} primaryTypographyProps={{
            fontSize: 16,
            fontWeight: 'bold',
            color: "primary.light",
          }} />
          {open ? <ExpandLess sx={{ color: "primary.light" }} /> : <ExpandMore sx={{ color: "primary.light" }} />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {options.map((elm) => (
            <ListItemButton key={elm}>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: "primary.light", width: "12px", height: "12px" }} />
              </ListItemIcon>
              <ListItemText primary={elm}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'bolder',
                  color: "primary.light",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  )
}
