import { Pressable, StyleSheet, Text, View } from 'react-native';
import { User } from './User';
import { useEffect, useState } from 'react';

export default function App() {


  const [users,setUsers] = useState([])
  const [selectedU, setSelU] = useState()
  let listLen

  const getUsers = () => {
    fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then(json => setUsers(json))
  }

  useEffect(() => {
    getUsers();
  },[])

    return (
      <View style={styles.container}>
        <View style={styles.SideBar}>
          <Pressable style={styles.sideBtn} onPress={() => {
            fetch('http://localhost:3001/api/users/',{
              method: 'POST',
              headers: {"Content-Type":"application/json"}
            })
            .then(res=>{
              getUsers();
              setSelU({})
            })
            
          }}>
            <Text style={styles.bttnTxt}>new user</Text>
          </Pressable>
          <Pressable style={styles.sideBtn} onPress={() => {
            fetch(`http://localhost:3001/api/users/${selectedU.id}`,
            {
              method: 'DELETE'
            })
            .then(res=>{
              getUsers();
              setSelU()
            })
          }}>
            <Text style={styles.bttnTxt}>Delete user</Text>
          </Pressable>
        </View>
        <View style={styles.Main}>
          {users.map(user => 
            <Pressable key={user.id} onPress={() => setSelU(user)}>
              <Text style={{marginTop: 4}}>{user.name}</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.Userbox}>
            {selectedU !== undefined ? 
            <View>
          <User user={selectedU} UserListLen={listLen}/>
          <Pressable style={styles.updateBtn} onPress={()=>setSelU()} >
                <Text>close</Text>
            </Pressable>
            </View>
          :
          <Text> no user selected</Text>
        }
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
    flexGrow: 1,
    border: '1px solid black',
    borderRadius:5,
    padding: 5
  },
  Userbox:{
    flexGrow: 1,
    border: '1px solid black',
    borderRadius:5,
    margin: 10

  },
  SideBar:{
    flexGrow: 1,
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
