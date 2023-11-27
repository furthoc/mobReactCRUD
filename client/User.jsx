import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export function User({user, UserListLen}){


    let id = user?.id ?? -1; 
    const [name,setName] = useState(user?.name ?? '')
    const [email,setEmail] = useState(user?.email ?? '')
    const [phone,setPhone] = useState(user?.phone ?? '')
    const [website,setWebsite] = useState(user?.website ?? '')

    const update = data => {
        fetch('http://localhost:3001/api/users/',{
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        
    }

    return (
        <View style={styles.userInfo}>
            <Text>hello {name}</Text>
            <Text>name: 
                <TextInput value={name} onChangeText={setName}/>
            </Text>
            <Text>email: 
                <TextInput value={email} onChangeText={setEmail}/>
            </Text>
            <Text>phone: 
                <TextInput value={phone} onChangeText={setPhone}/>
            </Text>
            <Text>website: 
                <TextInput value={website} onChangeText={setWebsite}/>
            </Text>
            <Pressable style={styles.updateBtn} onPress={()=>console.log({id,name,email,phone,website})} >
                <Text>LOG CHECK {name}</Text>
            </Pressable>

            <Pressable style={styles.updateBtn} onPress={()=>update({id,name,email,phone,website})} >
                <Text>UPDATE {name}</Text>
            </Pressable>
        </View>

        

    )
}

const styles = {
    userInfo:{
        padding: 5

    },
    updateBtn:{
        border: '1px solid black',
        borderRadius: 5
        
    }

}