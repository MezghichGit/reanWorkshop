
// Exemple 1 : Basic component

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
       <TextInput style={{padding: 10, margin:10}} placeholder='Taper un mot'></TextInput>
      <Button title="cliquer" onPress={()=>console.log("hello rean")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
   // flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtStyle1: {
    backgroundColor: "blue",
    flex:0.3
  },
  txtStyle2: {
    backgroundColor: "red",
    flex:0.5
  },
  logo: {
    width: 66,
    height: 58,
  },
});

*/
// Exemple 2 : Notion de propos

/*

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.firstname}!  {props.lastname}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting firstname='Amine' lastname='Mezghich' />
      <Greeting firstname='Mohamed' lastname='Mezghich'/>
      <Greeting firstname='Med Amine' lastname='Mezghich' />
    </View>
  );
}

export default LotsOfGreetings;

*/

// Exemple 3 : Notion de hook

/*
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Vous avez cliqué {count} fois</Text>
      <View style={styles.container}>
        <View style={styles.btnStyle}>
          <Button  title="Increment" onPress={() => setCount(count + 1)}></Button>
        </View>

        <View style={styles.btnStyle}>
          <Button  title="Décrement" onPress={() => setCount(count - 1)} color={"red"}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle:{
    margin:20,
    padding: 20
  }

});
export default Example;
*/
/*
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [keyWord, setKeyword] = useState('');
  const [activeKeyword, setActiveKeyword] = useState(null);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
        }} 

      >
      </Image>
      <View style={styles.form}>
        <Text>Mot clé</Text>
        <TextInput
          placeholder='Entrez un mot-clé...'
          style={styles.fieldComment}
          onChangeText={setKeyword}
          value={keyWord}
        ></TextInput>
      </View>
      <Button title='Soumettre' onPress={() => { setActiveKeyword(keyWord) }}></Button>
      <View style={{ margin: 15 }}>
        <Text>Vous avez tapé : {activeKeyword}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    minWidth: 70,
    minHeight: 60
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldComment: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 25,
  },
  submitFormButton: {
    magin: 20,
  }
});
*/
// TP 1 : Affichage aléatoire de chat sur son screen
/*
  import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';

const App = () => {

  const[img, setImg]=useState(' ');
  const getCat = () => {
    fetch('http://purr.objects-us-east-1.dream.io/i/img_20170428_073735.jpg').then(
      (res) => { return res.json() }).then(data => {
        console.log(data) ;
        setImg(data.file);
      })
  }

  //getCat();

  return (
    <View style={styles.container}>
    <Text>Cliquer ici pour avoir un chat</Text>
    <Image source={{uri: img}} style={styles.img}/>
    <Button
      onPress={getCat}
      title="Nouveau Chat"
      color="#f00"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '80%',
    height:'60%',
    marginBottom:'5%',
    marginTop:'5%',
  }
});

export default App;*/

// TP 2 : Composants de base
/*
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

const App = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [value, setValue] = useState("first");
  const [checkedReact, setCheckedReact] = useState(false);
  const [checkedReactNative, setCheckedReactNative] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
        }} />
      <Text>Formulaire d'inscription:</Text>
      <View style={{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.label}>Nom: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="numeric"
          textContentType={password}
          secureTextEntry={true}
        />
      </View>
      <Text>Vous êtes :</Text>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.radio}>
          <RadioButton value="first" />
          <Text>Pro</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton value="second" />
          <Text>Etudiant</Text>
        </View>
      </RadioButton.Group>
      <Text>Vous préférer:</Text>
      <View style={styles.checkbox}>
        <Checkbox
          status={checkedReact ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReact(!checkedReact);
          }}
        />
        <Text>React</Text>
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          status={checkedReactNative ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReactNative(!checkedReactNative);
          }}
        />
        <Text>React Native</Text>
      </View>
      <View style={styles.button}>
        <Button title="Register" />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    margin: 'auto'
  },
  label: {
    flex: 0.1
  },
  input: {
    flex: 0.9,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 20
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center"
  },
  radio: {
    flexDirection: "row",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }

});

export default App;
*/


/*
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;*/
/*
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
*/
import React, { useState } from "react";
import { View, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

  /*{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },*/

 
  const DATA = [

  {

    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    img: "https://img.cuisineaz.com/660x660/2013/12/20/i18445-margherite.webp",
    prix: "10€",
    ingredients: "Tomate, Fromage",
    title: "Marguerite",

  },

  {

    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    img: "https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/15142009/pizza-aux-fruits-de-mer.jpg",
    prix: "11€",
    ingredients: "Tomate, Fromage, fruits de mer",
    title: "Fruit de mer",
  },

  {

    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    img: "https://assets.afcdn.com/recipe/20161130/7916_w1024h778c1cx2808cy1872.webp",
    prix: "15€",
    ingredients: "Tomate, Fromage, jambon",
    title: "Calzone",
  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.row}>
      <Image style={styles.logo} source={{ uri: item.img }} />
      <View style={styles.col}>
        <Text style={[styles.title, textColor]}>Titre : {item.title}</Text>
        <Text style={[styles.title, textColor]}>Prix : {item.prix}</Text>
        <Text style={[styles.title, textColor]}>Ingrédients : {item.ingredients}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const monItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={monItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },

  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flex: 0.5,
    flexDirection: "col",
    flexWrap: "wrap",
    marginHorizontal: 10
  },
  logo: {
    flex: 0.5,
    width: 150,
    height: 150,
  },
});

export default App;

