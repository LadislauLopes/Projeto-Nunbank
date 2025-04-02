import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native"
import { useRouter } from "expo-router"
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context"

import React, { useState } from "react"


const LinhaDivisoria = () => {
  return <View style={styles.linha} />
}

export default function Sobre() {
  const router = useRouter()
  const [inputValue, setInput] = useState()
  const [balance, setBalance] = useState("1.000,00")
  const [limitCard, setLimit] = useState("1.000,00")




  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <StatusBar barStyle="dark-content" translucent />
          <ScrollView>
            {/* header */}
            <View
              style={{
              backgroundColor: "#8A19D6",
              alignItems: "center",
              justifyContent: "center",
              height: 178,
              }}
            >
                <View style={styles.cabecalho}>
                  <View style={styles.boxIconesCabecalho}>
                    <View>
                      <TouchableOpacity onPress={() => router.back()}>
                      <Image
                        style={styles.icone}
                        source={require("./img/botao-x.png")}
                      />
                      </TouchableOpacity> 
                    </View>

                    <View>
                      <Text key="1" style={styles.textTitle}>
                      Qual é o valor da Transferência?
                      </Text>
                    </View>

                    <View>
                      <Text key="2" style={{ marginVertical: 5 }}>
                      Saldo da conta: {balance}
                      </Text>
                    </View>

                    <View>
                      <Text key="3" style={{  marginVertical: 5 }}>
                      Limite do cartão: {limitCard}
                      </Text>
                    </View>
                  </View>

                  <View style={stylesValue.container}>
                    <TextInput
                      style={stylesValue.input}
                      keyboardType="numeric"
                      onChangeText={setInput}
                      value={inputValue}
                      maxLength={15} 
                      placeholder="0,00"
                    />
                  </View> 

                  <LinhaDivisoria />

                  <View>
                    <TouchableOpacity style={stylesSection.circuloOptions} onPress={() => router.back()}>
                      <Image
                        style={styles.icone}
                        source={require("./img/pix/next.png")}
                      />
                    </TouchableOpacity>
                  </View>

                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
)}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  cabecalho: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    height: 178,
    paddingHorizontal: 20,
  },

  icone: {
    width: 20,
    height: 20,
  },

  boxIconesCabecalho: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 53,
  },

  itensIcones: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 15,
  },

  boxTextUsuario: {
    marginTop: 20,
  },

  textTitle: {
    color: "Black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%",
    alignSelf: "center",
    paddingVertical: 10,
    marginTop: 10,
  },
})

const stylesSection = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 20,
  },

  content: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
  },

  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 500,
  },

  titleOptions: {
    fontSize: 14,
    fontWeight: 500,
  },

  titleSaldo: {
    fontSize: 26,
    fontWeight: 700,
  },

  containerScrol: {
    marginTop: 40,
  },

  contentOptions: {
    alignItems: "center",
    paddingHorizontal: 7,
  },

  circuloOptions: {
    backgroundColor: "#8A19D6",
    width: 53,
    height: 53,
    marginTop:20,
    marginLeft: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  cartoes: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    gap: 10,

    width: "100%",
    height: 56,
    borderRadius: 12,

    padding: 16,
  },

  inforRend: {
    backgroundColor: "#f0f1f5",

    width: 263,
    height: 80,
    borderRadius: 12,

    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
  },
})


const stylesValue = StyleSheet.create({
  container: { padding: 0, width: "100%", marginTop:5},
  input: {
    paddingTop: 10,
    fontSize: 22,
    textAlign: "Left",
    fontWeight: 700,
    borderWidth: 0,
    outlineStyle: "none",
  },
})
