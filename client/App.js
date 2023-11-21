import { Pressable, StyleSheet, Text, View } from 'react-native';
import { User } from './User';
import { useEffect, useState } from 'react';

export default function App() {


  const [users,setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then(json => setUsers(json))
      .catch(err=> console.error(err.message))
  },[])


  return (
    <View style={styles.container}>
      <View style={styles.SideBar}>
        <Pressable style={styles.sideBtn}>
          <Text style={styles.bttnTxt}>new user</Text>
        </Pressable>
        <Pressable style={styles.sideBtn}>
          <Text style={styles.bttnTxt}>Delete user</Text>
        </Pressable>
      </View>
      <View style={styles.Main}>
        <Text>TESTING</Text>
        <User users={users} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Main:{
  },
  SideBar:{
    border: '1px solid black',
    padding:5,
    borderRadius:5,
    marginRight: 10,
  },
  sideBtn:{
    border:'2px solid black',
    padding:5,
    borderRadius:5,
    margin: 5,
  },
  bttnTxt:{
    textAlign:'center'
  },
});

// {users.map((user) =>{
//   return <Text key={user.id}>{user.name}</Text>
// })}