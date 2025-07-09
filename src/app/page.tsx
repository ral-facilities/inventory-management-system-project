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
  { label: 'The Solution', id: 'solution' },
  { label: 'The Software', id: 'software' },
  { label: 'Future Work', id: 'future-work' },
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
            Inventory Management System (IMS)
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
            Traditional inventory tracking methods such as spreadsheets and
            static documents struggle to scale with growing operational
            complexity. As facilities expand, the need for a centralised,
            dynamic, and scalable inventory solution becomes critical to ensure
            efficiency and reduce downtime.
          </Typography>
        </Box>

        <Box id="solution" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            The Solution
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            IMS offers a centralised platform for managing inventory across
            systems. It enhances availability, supports forecasting, reduces
            operational costs, and minimises downtime. The system is
            continuously evolving, with new features and improvements being
            released based on user feedback and operational needs.
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
                    details—supporting efficient planning, quoting, and
                    inventory management.
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
                    subsystem, displaying associated items, metadata, images,
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
                    <strong>&apos;Move To&apos; Dialog:</strong> Facilitates the
                    transfer of physical items from storage into the &apos;100J
                    Pump Laser (Demo Backup)&apos; subsystem— ensuring accurate
                    tracking and seamless integration within the system
                    hierarchy.
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

        <Box id="software" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            The Software
          </Typography>
          <Typography variant="body1">
            IMS is built using a modular microservice architecture:
          </Typography>
          <List sx={{ pl: 3, mb: 2 }}>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/inventory-management-system-api"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      IMS API
                    </Link>{' '}
                    – Manages core inventory entities such as items and
                    catalogues.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/object-storage-api"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      Object Storage API
                    </Link>{' '}
                    – Handles file attachments and images.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/ldap-jwt-auth"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      LDAP JWT Auth
                    </Link>{' '}
                    – Provides secure access using token-based authentication.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <Typography variant="body1">
            The frontend is composed of micro frontends for flexibility and
            scalability:
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/inventory-management-system"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      IMS UI
                    </Link>{' '}
                    – User interface for interacting with inventory data.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/scigateway"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                      underline="hover"
                    >
                      SciGateway UI
                    </Link>{' '}
                    – Manages authentication and navigation across modules.
                  </Typography>
                }
              />
            </ListItem>
          </List>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/inventory-management-system-project/ims-architecture-diagram.png"
            alt="IMS Architecture Diagram"
            style={{
              width: '100%',
              maxWidth: 'lg',
              height: 'auto',
              marginTop: '20px',
            }}
          />
          <Typography
            variant="caption"
            display="block"
            align="center"
            sx={{ mt: 1 }}
          >
            IMS Architecture Diagram
          </Typography>
        </Box>

        <Box id="future-work" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Future Work
          </Typography>
          <Typography variant="body1">
            The following are potential future work items and planned
            improvements for IMS:
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Observability</strong> – Introduce observability
                    tools to collect and analyse telemetry data, providing
                    deeper insights into system performance and health. This
                    will enable faster issue detection and improved
                    troubleshooting.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Kubernetes</strong> – Transition from Docker Compose
                    to a Kubernetes type of deployment to improve scalability,
                    reliability, and deployment automation. This will allow
                    better workload management, support for high availability,
                    and streamlined integration with Continuous Integration and
                    Continuous Delivery/Deployment pipelines.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>History</strong> – Keep a history of edits made to
                    the entities. For example, tracking the history of every
                    single position/location of an optic will allow users to see
                    where it has moved throughout its lifetime. They will also
                    be able to work out how many optics have been damaged in a
                    particular location.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Criticality &amp; Spares</strong> – Calculate the
                    number of spare items in stock and how many are needed to be
                    kept for each catalogue item to ensure the continuous
                    operation of the facility.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Single Sign-On (SSO)</strong> – Migrate from
                    Lightweight Directory Access Protocol-based authentication
                    to SSO to enhance user authentication, security, and user
                    experience.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>

        <Box id="contact" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Please reach out via GitHub or email the development team.
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
