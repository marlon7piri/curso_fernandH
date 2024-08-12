import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import CustomView from './CustomView';
import { colors } from '../../theme/themeComponents';
import { globalStyles } from '../../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TheTitle from '../../components/shared/TheTitle';

export default function PullToRefreshScreen() {

  const { top } = useSafeAreaInsets()
  const [isrefreshing, setIsRefreshing] = useState(false)



  const onRefresh = () => {
    setIsRefreshing(true)

    setTimeout(() => {
      setIsRefreshing(false)
    }, 2000)


  }
  return (
    <CustomView >
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={isrefreshing}
          onRefresh={onRefresh}
          progressViewOffset={top}

          colors={['red', 'blue', 'green']}
        />

      }>
        <TheTitle title=' Pull to Refresh' />



      </ScrollView>


    </CustomView>
  )
}