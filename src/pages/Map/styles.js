import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  },
  bsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 8,
  },
  bsWrapper: { backgroundColor: "transparent" },
  bsDraggableIcon: { backgroundColor: "#7159c1" },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  callout: {
    padding: 2
  },
  calloutView: {
    flexDirection: 'row'
  },
  calloutTitle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    alignSelf: 'center'
  },
  calloutLabel: {
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 2,
  },
  calloutValue: {
    color: '#212121',
    paddingVertical: 2,
  }
});
