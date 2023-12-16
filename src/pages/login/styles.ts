import { StyleSheet } from "react-native";
import { color } from "../../styles/globalStyles";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 90,
  }, 
  title: {
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: 'center'
  },
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  inputText: {
  },
  btnLog: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    marginTop: 25
  },
  btnLogText: {
    color: '#777',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 15
  }
});
