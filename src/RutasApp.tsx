import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './presentation/navigation/StackNavigator'
import PermissionsChecker from './presentation/providers/PermissionsChecker'

const RutasApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator/>
      </PermissionsChecker>
    </NavigationContainer>
  )
}

export default RutasApp