import Icon from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Map from './pages/Map';
import Prevention from './pages/Prevention';

function MapaStack({ route: { params: { mapScheme } }}) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mapa" component={Map} initialParams={{mapScheme}} />
    </Stack.Navigator>
  );
}

export default function Routes({mapScheme}) {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dicas">
        <Drawer.Screen
          name="Prevenção"
          component={Prevention}
          options={{ drawerIcon: (_) => <Icon name="ios-megaphone" size={24} style={{ marginBottom: -3 }} /> }}
        />
        <Drawer.Screen
          name="Mapa"
          component={MapaStack}
          initialParams={{mapScheme}}
          options={{ drawerIcon: (_) => <Icon name="md-map" size={24} style={{ marginBottom: -3 }} /> }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
