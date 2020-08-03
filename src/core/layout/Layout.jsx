import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'
import Sidebar from './Sidebar'
import styles from './index.module.scss'

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()

  return (
    <div className={styles.layout}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={styles.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            classes={{ paper: styles.drawerPaper }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <Sidebar />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: styles.drawerPaper }}
            variant="permanent"
            open
          >
            <Sidebar />
          </Drawer>
        </Hidden>
      </nav>
      <main className={styles.content}>
        <div className={styles.toolbar} />
        {children}
      </main>
    </div>

  )
}