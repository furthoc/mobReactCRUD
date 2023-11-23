import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export function User(props){


    const [id,setId] = useState(props.user?.id ?? -1)
    const [name,setName] = useState(props.user?.name ?? '')
    const [email,setEmail] = useState(props.user?.email ?? '')
    const [phone,setPhone] = useState(props.user?.phone ?? '')
    const [website,setWebsite] = useState(props.user?.website ?? '')

    return (
        <View>
            <Text>hello {name}</Text>
        </View>
    )
}

const styles = {

}