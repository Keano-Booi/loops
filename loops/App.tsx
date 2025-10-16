import React, { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function App() {

  const[output,setOutput] = useState<string[]>([]);
  const numbers: number[]=[2,4,6,8,10];

  const runFor=(): void=>{
    const Lines: string[]=[];
    for(let i =0;i<numbers.length;i++)
    {Lines.push(`for: i=${i}->${numbers[i]}`)}
    setOutput(Lines);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>🍑Loops</Text>
      <View>
     
      <Button title="Start Loop" onPress={runFor}></Button>
       {output.length===0 ?(
        <Text>Output will always appear here</Text>
      ) : (output.map((line,i) => <Text key={i}>{line}</Text>))

      }
      </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c2d2dff',
    alignItems: 'center',
    
    
  },

  mainText:{
    fontSize:60,
    fontStyle:'italic',

  }
});
