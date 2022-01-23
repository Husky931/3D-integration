import { useWindowSize } from "@lincode/hooks"
import { Menu } from "@mui/icons-material"
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Tooltip } from "@mui/material"
import React, { useState } from "react"
//@ts-ignore
import logoSrc from "../assets/logo-text.png"
import { setShowSignUp } from "../states"

const Navigation: React.FC = () => {
    const [windowWidth] = useWindowSize()
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <>
            <AppBar position="fixed" elevation={0} className="bg-transparent bg-blur">
                <Toolbar className="gap-10 container mx-auto px-10 xl:px-40">
                    <img src={logoSrc} className="h-5" />
                    <div className="flex-grow" />
                    {windowWidth > 640 ? (
                        <>
                            <Tooltip title="Coming soon" arrow>
                                <Button>Showcase</Button>
                            </Tooltip>
                            <Tooltip title="Coming soon" arrow>
                                <Button>Docs</Button>
                            </Tooltip>
                            <Tooltip title="Coming soon" arrow>
                                <Button>Community</Button>
                            </Tooltip>
                            <Button className="bg-[#9e4df6] text-white whitespace-nowrap">
                                <span className="truncate">Get Started</span>
                            </Button>
                        </>
                    ) : (
                        <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
                            <Menu />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className="w-64">
                    <List>
                        <ListItem button>
                            <ListItemText primary="Showcase" secondary="Coming soon" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Docs" secondary="Coming soon" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Community" secondary="Coming soon" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    )
}

export default Navigation
