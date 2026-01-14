'use client';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
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
  { label: 'Quick Glance', id: 'overview' },
  { label: 'Applications', id: 'applications' },
  { label: 'The Software', id: 'software' },
  { label: 'Contact Us', id: 'contact' },
];
const APP_BAR_HEIGHT = '64px';
const APP_BAR_OFFSET = APP_BAR_HEIGHT; // Offset for scroll margin

const Bold = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" fontWeight="bold" fontSize="inherit">
    {children}
  </Typography>
);

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
            maxWidth="xl"
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

          <Typography variant="body1" sx={{ mb: 3 }}>
            Scientific and industrial facilities use complex systems such as
            vacuum chambers, detectors, lasers, and specialised equipment, where
            downtime is costly and disruptive. Traditional inventory tracking
            methods like spreadsheets and static documents cannot keep pace with
            growing operational complexity. As facilities expand, a centralised,
            dynamic, and intelligent inventory solution becomes essential to
            maintain efficiency and minimise downtime.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Facilities often struggle with:
          </Typography>

          <List sx={{ pl: 1, mb: 3 }}>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Limited visibility</Bold> — Unclear what parts exist,
                    where they are, and their condition.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Fragmented catalogues</Bold> — Data scattered across
                    spreadsheets and local documentation.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Inefficient spare-part management</Bold> — Leads to
                    shortages, overstocking, and delayed maintenance.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Lack of predictive insights</Bold> — No forecasting
                    for part lifetimes or replacement needs.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>

        <Box id="solution" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Our Solution
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            IMS provides a web-based system to store, track, move, and itemise
            your inventory. ​ Categorise different parts, create individual
            records for physical entities. Move them between systems, tracking
            their usage status. IMS keeps track of spares, so you will always
            know when the best time to order new parts is.
          </Typography>

          <Box sx={{ mb: 6 }}>
            <Typography variant="body1" gutterBottom>
              IMS provides:
            </Typography>

            <List sx={{ pl: 1 }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CircleIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <Bold>A centralised, browsable catalogue</Bold> of all
                      components used in the facility.
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CircleIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <Bold>Real-time tracking</Bold> of all physical parts as
                      they move through storage, operation, and scrap.
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CircleIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <Bold>Automated spare-part calculations</Bold> based on
                      current stock, location, and usage conditions.
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CircleIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <Bold>Predictive spare insights</Bold> that estimate when
                      new parts should be ordered based on expected lifetime,
                      time to replace, items in use, and current spare counts
                      <Typography component="span" sx={{ ml: 0.25 }}>
                        *
                      </Typography>
                      .
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CircleIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <Bold>Predictive part lifetime insights</Bold> that
                      estimate part lifetimes by analysing historical usage and
                      failure data
                      <Typography component="span" sx={{ ml: 0.25 }}>
                        *
                      </Typography>
                      .
                    </Typography>
                  }
                />
              </ListItem>
            </List>

            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
              *This functionality is currently being implemented.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Below is an example use case of IMS for a Scientific Research
              Facility:
            </Typography>

            <Box sx={{ mx: 'auto', width: '100%', maxWidth: 'lg' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  '/inventory-management-system-project/ims-systems-perspective-detailed.png'
                }
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
                <Bold>IMS structure overview:</Bold> Detailed categorisation,
                for catalogue items and systems. Items which can move
                dynamically between systems. Our solution provides a
                comprhensive overview of your inventory.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box id="overview" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
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
                    <Bold>Catalogue Items Table:</Bold> Displays structured
                    commercial representations of physical items, including
                    names, descriptions, lifecycle status, and procurement
                    details - supporting efficient planning, quoting, and
                    inventory management. Here you can also view the number of{' '}
                    <Bold>spare items</Bold>, a key indicator for when to
                    purchase more inventory.
                  </>
                ),
              },
              {
                src: '/inventory-management-system-project/catalogue-item-landing-page.png',
                alt: 'Catalogue Item Landing Page',
                caption: (
                  <>
                    <Bold>Catalogue Item Landing Page:</Bold> Provides a
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
                    <Bold>Subsystem Dashboard:</Bold> Offers a comprehensive
                    view of the &apos;100J Pump Laser (Demo Backup)&apos;
                    subsystem, displaying its type, associated items, metadata,
                    images, and attachments to support high-priority component
                    tracking and lifecycle management.
                  </>
                ),
              },
              {
                src: '/inventory-management-system-project/move-to-dialog.png',
                alt: 'Move To Dialog',
                caption: (
                  <>
                    <Bold>Moving Items:</Bold> The &apos;Move To&apos; Dialog
                    facilitates the transfer of physical items from storage into
                    the &apos;100J Pump Laser (Demo Backup)&apos; subsystem -
                    ensuring accurate tracking and seamless integration within
                    the system hierarchy. Movement of items between systems is
                    restricted based on rules.
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

        <Box id="applications" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Applications
          </Typography>
          <Typography variant="body1">How can IMS apply to you</Typography>
          <List sx={{ pl: 3, mb: 2 }}>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Transportation & Logistics</Bold> - Manage parts for
                    vehicles, equipment, and infrastructure across depots and
                    distribution hubs.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Manufacturing</Bold> - Manage machine components,
                    tooling, and maintenance-critical parts across production
                    lines.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Healthcare</Bold> - Manage parts for equipment used at
                    healthcare facilities.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Bold>Research Facilities</Bold> - Manage specialised parts
                    for instruments, laboratories, and experimental
                    infrastructure.
                  </Typography>
                }
              />
            </ListItem>
          </List>
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
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/inventory-management-system-api"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
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
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/object-storage-api"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                    >
                      Object Storage API
                    </Link>{' '}
                    – Handles file attachments and images.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/ldap-jwt-auth"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
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
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/inventory-management-system"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
                    >
                      IMS UI
                    </Link>{' '}
                    – User interface for interacting with inventory data.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CircleIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Link
                      href="https://github.com/ral-facilities/scigateway"
                      target="_blank"
                      rel="noopener"
                      fontWeight="bold"
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

        <Box id="contact" sx={{ mb: 6, scrollMarginTop: APP_BAR_OFFSET }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Please email the development team at{' '}
            <Link href="mailto:ims-support@stfc365.onmicrosoft.com?subject=IMS Query">
              ims-support@stfc365.onmicrosoft.com
            </Link>{' '}
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
