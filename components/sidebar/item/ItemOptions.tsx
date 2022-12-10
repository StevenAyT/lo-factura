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
import Link from "next/link";


export const ItemOptions = ({ title, Icon, options }: SidebarItemAndOptionsProps) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          borderWidth: "1px", borderColor: "secondary.main", borderStyle: "solid",
          borderRadius: "10px", mt: 0.5, textDecoration: "none"
        }}
      >
        <ListItemButton sx={{ borderRadius: "10px" }} onClick={() => setOpen(!open)}>
          <ListItemIcon sx={{ color: "secondary.main" }}>
            {Icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ textDecoration: "none" }} primaryTypographyProps={{
            fontSize: 16,
            fontWeight: 'bold',
            color: "secondary.main",
          }} />
          {open ? <ExpandLess sx={{ color: "secondary.main" }} /> : <ExpandMore sx={{ color: "secondary.main" }} />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {options.map(({ name, path }) => (
            <Link key={path} href={path} style={{ textDecoration: "none" }}>
              <ListItemButton >
                <ListItemIcon>
                  <FiberManualRecordIcon sx={{ color: "secondary.main", width: "12px", height: "12px" }} />
                </ListItemIcon>
                <ListItemText primary={name}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'bolder',
                    color: "secondary.main",
                  }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  )
}
