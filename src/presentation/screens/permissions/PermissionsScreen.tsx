import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/theme/styles'
import { usePermissionStore } from '../../store/usePermissionStore'

const PermissionsScreen = () => {

  const {locationStatus, requestLocationPermission} = usePermissionStore();

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Habilitar ubicacion</Text>
      <Pressable
        style = {globalStyles.btnPrimary}
        onPress={requestLocationPermission}
      >
        <Text style={{color: 'white'}}>
          Habilitar Localizacion
        </Text>
        
      </Pressable>
    
    <Text>Estado Actual: {locationStatus}</Text>

    </View>
  )
}

export default PermissionsScreen

const styles = StyleSheet.create({})