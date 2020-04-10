import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, Modal, SafeAreaView, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import BottomSheet from "react-native-raw-bottom-sheet";

import api from '../../services/api';
import styles from './styles';

export default function Map({ route: { params: { mapScheme } }}) {
  const refBottomSheet = useRef();
  const [modalVisible, setModalVisible] = useState(true);
  const [world,setWorld] = useState(undefined);
  useEffect(() => {
    async function loadworld(refBottomSheet) {
      const { data: world } = await api.get('/all');
      if(!world) return;
      setModalVisible(false);
      setWorld(world);
    }
    loadworld(refBottomSheet);
  }, [refBottomSheet]);
  const [countries,setCountries] = useState([]);
  useEffect(() => {
    async function loadCountries() {
      if(!world) return;
      setModalVisible(true);
      const { data: countries } = await api.get('/countries');
      setCountries(countries);
      refBottomSheet.current.open();
      setModalVisible(false);
    }
    loadCountries();
  }, [world]);
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.mapStyle}
        customMapStyle={mapScheme}
        loadingEnabled={true}
        toolbarEnabled={true}
        zoomControlEnabled={true}
      >
        {countries.map(country => (
          <Marker
            key={country.country}
            coordinate={{
              latitude: country.countryInfo.lat,
              longitude: country.countryInfo.long
            }}
            pinColor="green"
          >
            <Callout style={styles.callout} onPress={() => refBottomSheet.current.open()}>
              <Text style={styles.calloutTitle}>{country.country}</Text>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Testes: </Text>
                <Text style={styles.calloutValue}>{country.tests}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos: </Text>
                <Text style={styles.calloutValue}>{country.cases}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Hoje: </Text>
                <Text style={styles.calloutValue}>{country.todayCases}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Ativos: </Text>
                <Text style={styles.calloutValue}>{country.active}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Recuperados: </Text>
                <Text style={styles.calloutValue}>{country.recovered}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Graves: </Text>
                <Text style={styles.calloutValue}>{country.critical}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Mortes: </Text>
                <Text style={styles.calloutValue}>{country.deaths}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Mortes Hoje: </Text>
                <Text style={styles.calloutValue}>{country.todayDeaths}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <BottomSheet
        ref={refBottomSheet}
        height={260}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: styles.bsContainer,
          wrapper: styles.bsWrapper,
          draggableIcon: styles.bsDraggableIcon
        }}
      >
        <>
          {world ? (
            <View style={styles.callout}>
              <Text style={styles.calloutTitle}>Mundo</Text>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Testes: </Text>
                <Text style={styles.calloutValue}>{world.tests}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos: </Text>
                <Text style={styles.calloutValue}>{world.cases}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Hoje: </Text>
                <Text style={styles.calloutValue}>{world.todayCases}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Ativos: </Text>
                <Text style={styles.calloutValue}>{world.active}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Recuperados: </Text>
                <Text style={styles.calloutValue}>{world.recovered}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Casos Graves: </Text>
                <Text style={styles.calloutValue}>{world.critical}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Mortes: </Text>
                <Text style={styles.calloutValue}>{world.deaths}</Text>
              </View>
              <View style={styles.calloutView}>
                <Text style={styles.calloutLabel}>Mortes Hoje: </Text>
                <Text style={styles.calloutValue}>{world.todayDeaths}</Text>
              </View>
            </View>
          ) : (<Text>Não há nada aqui.</Text>)}
        </>
      </BottomSheet>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator size="large" color="#7159c1" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}