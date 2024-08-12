import { View, Text, Modal, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import TheTitle from '../../components/shared/TheTitle'
import CustomView from './CustomView'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { ThemeContext } from '../../context/ThemeProvider'

export default function ModalScreen() {
  const { colors } = useContext(ThemeContext)

  const [setshowModal, setSetshowModal] = useState(false)
  return (

    <CustomView style={{ backgroundColor: colors.background }}>
      <TheTitle title='Modal Screen' />

      <PrimaryButton label='Abrir Modal' onPress={() => setSetshowModal(true)} />

      <Modal
       visible={setshowModal}
        animationType='slide'
        transparent

      >
        <View style={{
          position: "absolute",
          bottom: 0,
          width: '100%',
          height: "100%",
          backgroundColor: colors.background,
          padding: 10


        }}>

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
          }}>
            <View >
              <TheTitle title='Modal Screen' />

            </View>
            <View >
              <PrimaryButton label='Close Modal' onPress={() => setSetshowModal(false)} />

            </View>
          </View>
        </View>

      </Modal>
    </CustomView>
  )
}