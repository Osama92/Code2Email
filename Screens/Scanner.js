import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useNavigation} from '@react-navigation/native'




 function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [label, setLabel] = useState('')

  const navigation = useNavigation()


  var obj = []
    //label: []
 

 //var json = 'blow'


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    obj.push(data)
     var json = obj
      if (label.includes(json)) {
        alert('Label Already scanned. Proceed to next label.')
      } else {
        setLabel(label + '\n' +  json )
      }
      
    console.log(label)
  };



  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (

    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
         
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned &&  
      <View style={{flexDirection:'column', width:'100%', height:90,marginBottom:20, justifyContent:'space-between'}}>
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
         <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=>{navigation.navigate('SendEmail' , { clicked: label})}}>
           <Text style={{fontSize:20, color: '#fff'}}>Send</Text>
           </TouchableOpacity>
        </View>
        }
    
    </View>
  );
}
export default App