import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import { useRouter } from "expo-router"
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context"

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
                    <TouchableOpacity onPress={ () =>  router.navigate("/") }>
                      <Image
                        style={styles.icone}
                        source={require("./img/botao-x.png")}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.textTitle}>Area Pix </Text>
                  </View>
                  <View>
                    <Text>
                      Envie e receba pagamentos a qualquer hora e dia da semana,
                      sem pagar nada por isso.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Section */}
            <View style={stylesSection.container}>
              <View style={stylesSection.content}>
                <View>
                  <Text style={stylesSection.title}>Enviar</Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={stylesSection.containerScrol}
                >
                  <View style={stylesSection.contentOptions}>
                    <TouchableOpacity
                      onPress={() => router.navigate("/")}
                      style={stylesSection.circuloOptions}
                    >
                      <Image source={require("./img/Index/options/pix.png")} />
                    </TouchableOpacity>
                    <Text style={stylesSection.titleOptions}>Transferir</Text>
                  </View>

                  <View style={stylesSection.contentOptions}>
                    <View style={stylesSection.circuloOptions}>
                      <Image
                        source={require("./img/Index/options/cod_barras.png")}
                      />
                    </View>
                    <Text style={stylesSection.titleOptions}>Programar</Text>
                  </View>

                  <View style={stylesSection.contentOptions}>
                    <View style={stylesSection.circuloOptions}>
                      <Image
                        source={require("./img/Index/options/transferir.png")}
                      />
                    </View>
                    <Text style={stylesSection.titleOptions}>
                      Pix Copia e Cola
                    </Text>
                  </View>

                  <View style={stylesSection.contentOptions}>
                    <View style={stylesSection.circuloOptions}>
                      <Image
                        source={require("./img/Index/options/depositar.png")}
                      />
                    </View>
                    <Text style={stylesSection.titleOptions}>Ler qrcode</Text>
                  </View>
                </ScrollView>
              </View>
            </View>

            {/* Section */}
            <View style={stylesSection.container}>
              <View style={stylesSection.content}>
                <View>
                  <Text style={stylesSection.title}>Receber</Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={stylesSection.containerScrol}
                >
                  <View style={stylesSection.contentOptions}>
                    <TouchableOpacity
                      onPress={() => router.navigate("/")}
                      style={stylesSection.circuloOptions}
                    >
                      <Image source={require("./img/Index/options/pix.png")} />
                    </TouchableOpacity>
                    <Text style={stylesSection.titleOptions}>Cobrar</Text>
                  </View>

                  <View style={stylesSection.contentOptions}>
                    <View style={stylesSection.circuloOptions}>
                      <Image
                        source={require("./img/Index/options/cod_barras.png")}
                      />
                    </View>
                    <Text style={stylesSection.titleOptions}>Depositar</Text>
                  </View>



                </ScrollView>
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
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15
  },
})

const stylesSection = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
    backgroundColor: "#f0f1f5",

    flexDirection: "row",
    gap: 10,
    marginTop: 20,
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
