// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image,TextInput,Button,StatusBar,FlatList} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [SearchInput, setSearchText]=useState('')
  const Activities=[
    { id: 1, name: 'Run 5 km', category: 'Exercise'},
    { id: 2, name: 'Practice yoga', category: 'Exercise' },
    { id: 3, name: 'Read 20 pages', category: 'Study' },
    { id: 4, name: 'Complete online course module', category: 'Study' },
    { id: 5, name: 'Write 500 words', category: 'Code'},
    { id: 6, name: 'Refactor component', category: 'Code'},
    { id: 7, name: 'Prepare dinner', category: 'Cook'},
    { id: 8, name: 'Bake cookies', category: 'Cook'},
    { id: 9, name: 'Read book chapter', category: 'Read'},
    { id: 10, name: 'Listen to audiobook', category: 'Read' },
    { id: 11, name: 'Meditate for 20 minutes', category: 'Relax' }
  ]
  function settingSearchText(text){
    setSearchText(text)
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white"  barStyle='dark-content'/>
    {/* <ScrollView> */}
     
      <Text style={{fontSize:40}} >Hello , Devs
      <View style={{borderRadius:30, backgroundColor:'white'}}> 
      <Image style={{height:50,width:50}} source={require('./assets/emoji.png')}></Image>
      </View> 
      </Text>
   
      <Text style={{paddingBottom:50}}>14 Task</Text>
      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row',alignItems: 'center',}}></View>
      <TextInput
        style={styles.setSearchInput}
        value={setSearchText}
        placeholder='search'
        onChange={settingSearchText}
       />
       
       <Button title='add'/>
       </View>
      < View>
      <Text style={{fontSize:30, padding:20}}> Categories  </Text>
      <View style={{width:300, height:200,  backgroundColor:'white'}}>
      <Text style={{padding:20, fontSize:20}}>Studying</Text>
      <Image style={{ justifyContent:'center' }} source={require('./assets/young woman working online.png')}>
        
      </Image>
            
      </View>
      </View>
      <View>
      <Text style={{padding:20,fontSize:20}}>Ongoing Tasks</Text>
      {/* {Activities.map((activity)=>{
        return(
          <View key={activity.id}>
            <Text style={styles.data}>{activity.name}</Text>

          </View>
        )
      })} */}
      
      </View>
      <FlatList 
        data={Activities}
        renderItem={({item})=>{return(
          <View key={item.id}>
            <Text style={styles.data}>{item.name}</Text>

          </View>
        )}}
      />
      <StatusBar style="auto" />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    backgroundColor: '#f2f2f2',
    padding:40,
   
   
  },
  searchContainer:{
    // backgroundColor: '#f2f2f2',
    // padding: 10,
    // borderRadius: 8,
    // marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,

  },
  setSearchInput:{
    
    // fontSize: 16,
    // paddingHorizontal: 12,
    // paddingVertical: 8,
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  data:{
    
    backgroundColor:'#fff',
    padding:16,
    borderRadius:8,
    borderWidth:1,
    marginBottom:16.
    
  }
});
