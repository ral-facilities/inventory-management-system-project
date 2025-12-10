'use client';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const sections = [
  { label: 'Introduction', id: 'introduction' },
  { label: 'The Problem', id: 'problem' },
  { label: 'Our Solution', id: 'solution' },
  { label: 'Applications', id: 'applications' },
  { label: 'Quick Glance', id: 'overview' },
  { label: 'Contact Us', id: 'contact' },
];
const APP_BAR_HEIGHT = '64px';
const APP_BAR_OFFSET = APP_BAR_HEIGHT; // Offset for scroll margin

export default function Home() {
  const appBarLogo = '';
  const appBarLogoAlt = '';

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ minWidth: '200px', width: '100%' }}>
      <AppBar
        position="static"
        sx={{
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          height: APP_BAR_HEIGHT,
        }}
      >
        <Toolbar
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {appBarLogo && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '122px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={appBarLogo} alt={appBarLogoAlt} width="122px" />
            </Box>
          )}
          <Stack
            direction="row"
            spacing={6}
            maxWidth="lg"
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: {
                xs: 'none',
                lg: 'flex',
              },
            }}
          >
            {sections.map((section) => (
              <Typography variant="h6" key={section.id} component="span" noWrap>
                <Link
                  href={`#${section.id}`}
                  underline="none"
                  color="inherit"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {section.label}
                </Link>
              </Typography>
            ))}
          </Stack>

          <>
            <Box
              sx={{
                marginLeft: 'auto',
                display: {
                  xs: 'block',
                  lg: 'none',
                },
              }}
            >
              <IconButton
                color="inherit"
                onClick={handleMenuClick}
                aria-label="navigation menu"
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section.id}
                  component="a"
                  href={`#${section.id}`}
                  onClick={handleClose}
                >
                  <Typography variant="h6" component="span">
                    {section.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          zIndex: 1300,
          display: 'none',
          '@media (min-width: 1800px)': {
            display: 'block',
          },
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/inventory-management-system-project/UKRI_STFC_SCIENTIFIC_COMPUTING_RGB.png"
          alt="Scientific Computing Logo"
          width="320px"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box id="title" sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Inventory Management System
          </Typography>
        </Box>

        <Box id="introduction" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1">
            Managing complex inventories of high-value components is a challenge
            faced by many scientific and industrial facilities. The Inventory
            Management System (IMS) is a web-based platform designed to
            streamline the tracking, organisation, and lifecycle management of
            thousands of items such as optics, electronics, and mechanical
            parts.
          </Typography>
        </Box>

        <Box id="problem" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
            <Typography variant="h4" gutterBottom>
            The Problem
          </Typography>
          
          <Typography variant="body1">
            Modern research facilities rely on complex infrastructures where downtime 
            can be costly and disruptive. Traditional inventory tracking methods 
            such as spreadsheets and static documents struggle to scale with growing 
            operational complexity. As facilities expand, the need for a centralised,
            dynamic, and scalable inventory solution becomes critical to ensure
            efficiency and reduce downtime.
          </Typography>
        </Box>

        <Box id="solution" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Our Solution
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            IMS offers a centralised web-based platform for managing inventory across
            systems. Categorise different parts, create individual records for physical entities. Move them 
between systems, tracking their usage condition. IMS keeps track of spares, so you will 
always know when the best time to order new parts is. IMS enhances availability, supports forecasting, reduces
            operational costs, and minimises downtime. The system is
            continuously evolving, with new features and improvements being
            released based on user feedback and operational needs.
          </Typography>

          <Box sx={{ mx: 'auto', width: '100%', maxWidth: 'lg' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={'/inventory-management-system-project/ims-systems-perspective-detailed.png'}
                  alt={'IMS architecture overview'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    background: '#fff',
                  }}
                />
                <Typography
                  variant="caption"
                  display="block"
                  align="center"
                  sx={{ my: 1 }}
                >
                  <strong>IMS structure overview:</strong> Detailed categorisation, for catalogue items and systems. 
                  Items which can move dynamically between systems. Our solution provides a comprhensive overview of your inventory.
                  
                </Typography>
              </Box>
        </Box>

        <Box id="applications" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
            <Typography variant="h4" gutterBottom>
            Applications
          </Typography>
          <Typography variant="body1">
            How can IMS apply to you
          </Typography>
          <List sx={{ pl: 3, mb: 2 }}>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Transportation & Logistics</strong> - Manage parts for vehicles, equipment, and infrastructure across depots and distribution hubs.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Manufacturing</strong> - Manage machine components, tooling, and maintenance-critical parts across production lines.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Healthcare</strong> - Manage parts for equipment used at healthcare facilities.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Research Facilities</strong> - Manage specialised parts for instruments, laboratories, and experimental infrastructure.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
          
        <Box id='overview'>
          <Typography variant="h4" gutterBottom>
            Quick Glance
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Below are several key interfaces that highlight the functionality
            and design of the system:
          </Typography>

          <Stack spacing={4}>
            {[
              {
                src: '/inventory-management-system-project/catalogue-items-table.png',
                alt: 'Catalogue Items Table',
                caption: (
                  <>
                    <strong>Catalogue Items Table:</strong> Displays structured
                    commercial representations of physical items, including
                    names, descriptions, lifecycle status, and procurement
                    details - supporting efficient planning, quoting, and
                    inventory management.
                    Here you can also view the number of <strong>spare items</strong>, a key indicator for when to purchase more inventory.
                  </>
                ),
              },
              {
                src: '/inventory-management-system-project/catalogue-item-landing-page.png',
                alt: 'Catalogue Item Landing Page',
                caption: (
                  <>
                    <strong>Catalogue Item Landing Page:</strong> Provides a
                    centralised view of a catalogue item, combining technical
                    specifications, metadata, gallery, attachments, and notes to
                    support procurement, documentation, and lifecycle tracking.
                  </>
                ),
              },
              {
                src: '/inventory-management-system-project/subsystems-dashboard.png',
                alt: 'Subsystem Dashboard',
                caption: (
                  <>
                    <strong>Subsystem Dashboard:</strong> Offers a comprehensive
                    view of the &apos;100J Pump Laser (Demo Backup)&apos;
                    subsystem, displaying its type, associated items, metadata, images,
                    and attachments to support high-priority component tracking
                    and lifecycle management.
                  </>
                ),
              },
              {
                src: '/inventory-management-system-project/move-to-dialog.png',
                alt: 'Move To Dialog',
                caption: (
                  <>
                    <strong>Moving Items:</strong> The &apos;Move To&apos; Dialog facilitates the
                    transfer of physical items from storage into the &apos;100J
                    Pump Laser (Demo Backup)&apos; subsystem - ensuring accurate
                    tracking and seamless integration within the system
                    hierarchy. Movement of items between systems is restricted based on rules.
                  </>
                ),
              },
            ].map(({ src, alt, caption }, i) => (
              <Box key={i} sx={{ mx: 'auto', width: '100%', maxWidth: 'lg' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    background: '#fff',
                  }}
                />
                <Typography
                  variant="caption"
                  display="block"
                  align="center"
                  sx={{ my: 1 }}
                >
                  {caption}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box id="contact" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET, paddingTop: '32px' }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Please email the development team at{' '}
            <a href="mailto:ims-support@stfc365.onmicrosoft.com?subject=IMS Query">
              ims-support@stfc365.onmicrosoft.com
            </a>
            for any enquiries.
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          display: 'flex',
          '@media (min-width: 1800px)': {
            display: 'none',
          },
          justifyContent: 'center',
          mt: 6,
          mb: 4,
          width: '100%',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/inventory-management-system-project/UKRI_STFC_SCIENTIFIC_COMPUTING_RGB.png"
          alt="Scientific Computing Logo"
          style={{
            width: '100%',
            maxWidth: '320px',
            height: 'auto',
          }}
        />
      </Box>
    </div>
  );
}
