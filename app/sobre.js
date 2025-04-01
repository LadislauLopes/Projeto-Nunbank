import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';



export default function Sobre() {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <View style={styles.cabecalho}>
        <View style={styles.boxIconesCabecalho}>
          <View style={styles.circulo}>
              <Image style={styles.icone} source={require('./img/user.png')} />
          </View>

          <View style={styles.itensIcones} >
            <View>
            <Image style={styles.icone} source={require('./img/olho.png')} />
            </View>
            <View>
            <Image style={styles.icone} source={require('./img/ajuda.png')} />
            </View>
            <View>
            <Image style={styles.icone} source={require('./img/email.png')} />
            </View>
          </View>
        </View>

        <View style={styles.boxTextUsuario}>
          <Text style={styles.textUsuario}>Olá, sobre</Text>
        </View>

      </View>

      <View>
        <Button title='Ir Para Home' onPress={()=> router.replace("/")} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  cabecalho:{
    backgroundColor: '#490C74',
    width: '100%',
    height: 90,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  icone:{
    width: 20,
    height:20
  },
  circulo:{
    width: 40,
    height: 40,
    backgroundColor: '#9603E8',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIconesCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itensIcones:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 15,
  },
  boxTextUsuario:{
    marginTop: 10
  },
  textUsuario:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }
})



