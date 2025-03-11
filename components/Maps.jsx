import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const MapsEmbed = () => {

    const styles = StyleSheet.create({
        map:{
            width: "250px",
            height: "250px",
        }
    })

    // initialRegion = {{
    //     latitude: 6,
    //     longitude: 79,
    //     latitutdeDelta: 0.09,
    //     longitudeDelta: 0.04
    // }}

    return(
        <View className = "flex-1 bg-primary align-items justify-content">
            <MapView style = {styles.map}
                provider = {PROVIDER_GOOGLE}
                
                >
            </MapView>
        </View>
    )
}

export default MapsEmbed