import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';
import { CheckBox } from 'react-native-elements';
import {getPratheekValue,getShreyasValue,getVinayValue,getVivekValue,addValue, getitemArray, getVivArray, getVinArray, getPraArray, getShrArray, removeItem} from './data';

export default class App extends React.Component {
  constructor(props){
  super(props);
   this.state = {
     price: '',
     pratheek: '',
     shreyas: '',
     vinay: '',
     vivek: '',
     pratdetails: 0,
     shrdetails: 0,
     vindetails: 0,
     vivdetails: 0,
     tax1: 0,
     tax2: 0,
     pracheck: false,
     shrcheck: false,
     vincheck: false,
     vivcheck: false,
     itemarray: '',
     praarray: '',
     vivarray: '',
     vinarray: '',
     checked: false
   };
   this.addVal=this.addVal.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.addTax = this.addTax.bind(this);
   this.handleInputChange = this.handleInputChange.bind(this);
   this.remVal = this.remVal.bind(this);
  //  this.prachange = this.prachange.bind(this);
}

addVal(){
//  alert("peas");
console.log("IN ADDVALUE");
var pratoggle = this.state.pracheck ? 1 : 0;
var shrtoggle = this.state.shrcheck ? 1 : 0;
var vintoggle = this.state.vincheck ? 1 : 0;
var vivtoggle = this.state.vivcheck ? 1 : 0;

//  addValue(this.state.price,this.state.pratheek,this.state.shreyas,this.state.vinay,this.state.vivek);

addValue(this.state.price,pratoggle,shrtoggle,vintoggle,vivtoggle);

const pratdetails= getPratheekValue();
console.log(pratdetails);
this.setState({pratdetails});
const shrdetails= getShreyasValue();
this.setState({shrdetails});
const vindetails= getVinayValue();
this.setState({vindetails});
const vivdetails= getVivekValue();
this.setState({vivdetails});

this.setState({pracheck: false});
this.setState({shrcheck: false});
this.setState({vincheck: false});
this.setState({vivcheck: false});
this.setState({price:0});

}

remVal(){
removeItem();
const itemarray = getitemArray();
const praarray = getPraArray();
const shrarray = getShrArray();
const vinarray = getVinArray();
const vivarray = getVivArray();

this.setState({itemarray});
this.setState({praarray});
this.setState({shrarray});
this.setState({vinarray});
this.setState({vivarray});

const pratdetails= getPratheekValue();
this.setState({pratdetails});
const shrdetails= getShreyasValue();
this.setState({shrdetails});
const vindetails= getVinayValue();
this.setState({vindetails});
const vivdetails= getVivekValue();
this.setState({vivdetails});

}

addTax(){
  if(this.state.tax1 > 0)
  {
  addValue(this.state.tax1,1,1,1,1)
}
if(this.state.tax2 > 0)
{
addValue(this.state.tax2,1,1,1,1)
}
const pratdetails= getPratheekValue();
this.setState({pratdetails});
const shrdetails= getShreyasValue();
this.setState({shrdetails});
const vindetails= getVinayValue();
this.setState({vindetails});
const vivdetails= getVivekValue();
this.setState({vivdetails});
}

handleChange(e, name) {
  this.setState({ [name]: e.target.value });
};

handleInputChange(name) {
  // const target = event.target;
  // const value = target.type === 'checkbox' ? target.checked : target.value;
  // this.setState({
  //   [name]: value
  // });
  if(name=="pracheck")
  {
    if(this.state.pracheck == true)
    {
      this.setState({pracheck:false});
    }
    else {
      this.setState({pracheck:true});
    }
  }

  else   if(name=="shrcheck")
    {
      if(this.state.shrcheck == true)
      {
        this.setState({shrcheck:false});
      }
      else {
        this.setState({shrcheck:true});
      }
    }
  else   if(name=="vincheck")
    {
      if(this.state.vincheck == true)
      {
        this.setState({vincheck:false});
      }
      else {
        this.setState({vincheck:true});
      }
    }
  else   if(name=="vivcheck")
    {
      if(this.state.vivcheck == true)
      {
        this.setState({vivcheck:false});
      }
      else {
        this.setState({vivcheck:true});
      }
    }
}


  render() {
console.log("In render");
    return (
      <View style={styles.container}>
        <Text>Price</Text>
         <TextInput
         editable = {true}
               maxLength = {40}
               value = {this.state.price}
                onChangeText={(price) => this.setState({price})}
               style={{width: 150, height: 30, backgroundColor: 'powderblue'}}
         />
<Text>{"\n"}</Text>
<CheckBox
  title='Prateek'
  checked={this.state.pracheck}
  onPress = { () => this.handleInputChange('pracheck') }
/>
<CheckBox
  title='Shreyas'
  checked={this.state.shrcheck}
    onPress = { () => this.handleInputChange('shrcheck') }
/>
<CheckBox
  title='Vinay'
  checked={this.state.vincheck}
    onPress = { () => this.handleInputChange('vincheck') }
/>
<CheckBox
  title='Vivek'
  checked={this.state.vivcheck}
    onPress = { () => this.handleInputChange('vivcheck') }
/>

<Text>{"\n"}</Text>

         <Button
  title="Add"
  onPress={this.addVal}
  color="#841584"
/>

<Text>{"\n"}</Text>

<Button
title="Remove"
onPress={this.remVal}
color="#841584"
/>

<Text>{"\n"}</Text>
<Text>Prateek: {this.state.pratdetails}</Text><Text>{"\n"}</Text>

<Text>Shreyas: {this.state.shrdetails}</Text><Text>{"\n"}</Text>

<Text>Vinay: {this.state.vindetails}</Text><Text>{"\n"}</Text>

<Text>Vivek: {this.state.vivdetails}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
