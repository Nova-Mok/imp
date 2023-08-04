import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  IconButton,
  Avatar,
  Flex,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuList,
  MenuDivider,
  MenuButton,
  MenuItem,
  CloseButton,
  HStack,
} from '@chakra-ui/react';
import { AiFillHome,} from "react-icons/ai";
import {BsCloudUploadFill, BsTable, BsFillStarFill} from "react-icons/bs"
import { HiLogout, HiBell, HiOutlineChevronDown , HiMenuAlt1  } from "react-icons/hi";
const LinkItems = [
  { name: 'Home', icon: AiFillHome, link: '/' },
  { name: 'Find', icon: BsCloudUploadFill, link: '/upload' },
  { name: 'Table', icon: BsTable, link: '/table' },
  { name: 'Favorite', icon: BsFillStarFill, link: '/favorites' },
  { name: 'Logout', icon: HiLogout, link: '/login' },
];

const SidebarWithHeader = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

SidebarWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text bgGradient="linear(to-l, #FEB2B2, #9F7AEA)" bgClip="text" fontSize="2xl" fontFamily="Plus Jakarta Sans" fontWeight="bold">
          Biggbell
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

SidebarContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const NavItem = ({ icon: IconComponent, children, link, ...rest }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {IconComponent && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={IconComponent}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

NavItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  link: PropTypes.string.isRequired,
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton display={{ base: 'flex', md: 'none' }} onClick={onOpen} variant="outline" aria-label="open menu" icon={<HiMenuAlt1 />} />

      <Text display={{ base: 'flex', md: 'none' }} fontSize="2xl" fontFamily="Plus Jakarta Sans" fontWeight="bold">
        Biggbell
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<HiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <HiOutlineChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem as={Link} to="/userprofile">Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem as={Link} to="/login">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

MobileNav.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default SidebarWithHeader;