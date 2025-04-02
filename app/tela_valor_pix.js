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


function CurrencyInput() {
  const [value, setValue] = useState("0,00")

  const formatCurrency = (text) => {
    let numericValue = text.replace(/\D/g, "") 
    if (numericValue === "") numericValue = "0"

    let floatValue = (parseInt(numericValue, 10) / 100).toFixed(2) 
    let formattedValue = floatValue.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") 

    return formattedValue
  }

  const handleChange = (text) => {
    setValue(formatCurrency(text))
  }

  return (
    <View style={stylesValue.container}>
      <TextInput
        style={stylesValue.input}
        keyboardType="numeric"
        onChangeText={handleChange}
        value={`R$ ${value}`}
        maxLength={15} 
      />
    </View>
  )
}

const LinhaDivisoria = () => {
  return <View style={styles.linha} />
}

export default function Sobre() {
  const router = useRouter()

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
                    <Text style={styles.textTitle}>
                      Qual é o valor da Transferência?{" "}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ marginVertical: 5 }}>
                      Saldo da conta:{"  "}
                      <Text style={{ fontWeight: "700" }}>€3.240.221,00</Text>
                    </Text>
                  </View>
                  <View>
                    <Text style={{  marginVertical: 5 }}>
                      Limite do cartão:{"  "}
                      <Text style={{ fontWeight: "700" }}>€8.000.000,00</Text>
                    </Text>
                  </View>
                </View>

                    <View style={styles.container}>
            <CurrencyInput /> {/* Chamando o componente */}
          </View>
                
            <LinhaDivisoria />
            </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

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
    width: 63,
    height: 63,
    marginLeft: 0,
    backgroundColor: "#f0f1f5",
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
    padding: 10,
    fontSize: 22,
    textAlign: "Left",
    fontWeight: 700,
    borderWidth: 0,
    outlineStyle: "none",
  },
})
