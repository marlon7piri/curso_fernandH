import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { globalColors, globalStyles } from '../../theme/theme';
import { colors, globalStylesComponents } from '../../theme/themeComponents';
import Ioicon from 'react-native-vector-icons/Ionicons'
import MenuItem from './MenuItem';
import Separator from '../ui/Separator';
import CustomView from '../ui/CustomView';
import { ThemeContext } from '../../context/ThemeProvider';

export const animationMenuItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
]
export const menuItems = [



  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  }


];


export const uiMenuItems = [
  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
]
export default function ComponentsClases() {

  return (
    <CustomView >
      {animationMenuItems.map((item, index) => (

        <MenuItem
          key={index}
          {...item}
          isFirst={index === 0}
          isLast={index === animationMenuItems.length - 1}

        />


      ))

      }


      <View style={{ marginTop: 10 }} />
      {menuItems.map((item, index) => (

        <MenuItem
          key={index}
          {...item}
          isFirst={index === 0}
          isLast={index === menuItems.length - 1}

        />

      ))
      }


      <View style={{ marginTop: 10 }} />

      {uiMenuItems.map((item, index) => (
        <MenuItem
          key={index}
          {...item}
          isFirst={index === 0}
          isLast={index === uiMenuItems.length - 1}

        />
      ))
      }

    </CustomView>
  )
}
