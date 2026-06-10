import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false)

  const handleToggle = () => {
    if(!isEnable == false){
        setIsEnabled(false)
    }
    else{
        setIsEnabled(true)
    }
  };
  return (
    <ScrollView
      style={[
        { flex: 1 },
        { backgroundColor: isEnabled == true ? "black" : "white" },
      ]}
    >
      <View style={{ marginHorizontal: 15 }}>
        {/*               Everything starts here */}

        <View>
          <View>
              <Text style={{flex: 1, alignSelf: "flex-end", textAlign: "center", backgroundColor: "white", width: 120, borderRadius: 10 } }>Dark Mode: {isEnabled == true ? <Text>ON</Text>:<Text>OFF</Text>}</Text>
            <Switch 
            value={isEnabled}
            onValueChange={setIsEnabled}
            trackColor={{true: "purple", false: "grey"}}
            thumbColor={isEnabled ? "white" : "black"}
            />
          </View> 
{/*           <Pressable */}
{/*             style={[ */}
{/*               { */}
{/*                 flex: 1, */}
{/*                 justifyContent: "center", */}
{/*                 alignSelf: "flex-end", */}
{/*                 borderRadius: 5, */}
{/*                 width: 70, */}
{/*                 height: 40, */}
{/*                 marginTop: 5, */}
{/*               }, */}
{/*               { backgroundColor: switching == "light" ? "black" : "white" }, */}
{/*             ]} */}
{/*             onPress={handleSwitch} */}
{/*           > */}
{/*             <Text */}
{/*               style={[ */}
{/*                 { */}
{/*                   textAlign: "center", */}
{/*                   fontSize: 15, */}
{/*                   textTransform: "uppercase", */}
{/*                 }, */}
{/*                 { color: switching == "light" ? "white" : "black" }, */}
{/*               ]} */}
{/*             > */}
{/*               {switching} */}
{/*             </Text> */}
{/*           </Pressable> */}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 18,
            gap: 5,
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/images/meta.png")}
          />
          <Text
            style={[
              { fontSize: 20, fontWeight: "bold" },
              { color: isEnabled == true ? "white" : "black" },
            ]}
          >
            Meta
          </Text>
        </View>
        <Text
          style={[
            { fontSize: 20, fontWeight: "700" },
            { color: isEnabled == true ? "white" : "black" },
          ]}
        >
          Get Started on Facebook
        </Text>
        <Text
          style={[
            { marginBottom: 10 },
            { color: isEnabled == true ? "white" : "black" },
          ]}
        >
          Create an account to connect with friends, families and communities of
          people who share your interests.
        </Text>
        {/*           Names starts here  */}
        <Text
          style={[
            styles.headerText,
            { color: isEnabled == true ? "white" : "black" },
          ]}
        >
          Name
        </Text>
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="First name"
            placeholderTextColor={isEnabled == true ? "grey" : "black"}
            color= {isEnabled == true ? 'white' : 'black' }
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Surname"
            placeholderTextColor={isEnabled == true ? "grey" : "black"}
            color= {isEnabled == true ? 'white' : 'black' }
          />
        </View>
        {/*           Date of Birth starts here  */}
        <View style={[styles.viewStyle2, { marginTop: 10 }]}>
          <Text
            style={[
              styles.headerText,
              { color: isEnabled == true ? "white" : "black" },
            ]}
          >
            Date of birth
          </Text>
          <Ionicons
            style={[
              { marginTop: 10 },
              { color: isEnabled == true ? "white" : "black" },
            ]}
            name="help-circle-outline"
            size={20}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle2}
            placeholder="Day"
            placeholderTextColor={isEnabled == true ? "grey" : "black"}
            color= {isEnabled == true ? 'white' : 'black' }
            keyboardType="numeric"
          />
          <TextInput
            style={styles.textInputStyle2}
            placeholder="Month"
            placeholderTextColor={isEnabled == true ? "grey" : "black"}
            color= {isEnabled == true ? 'white' : 'black' }
            keyboardType="numeric"
          />
          <TextInput
            style={styles.textInputStyle2}
            placeholder="Year"
            placeholderTextColor={isEnabled == true ? "grey" : "black"}
            color= {isEnabled == true ? 'white' : 'black' }
            keyboardType="numeric"
          />
        </View>

        {/*           Gender starts here  */}
        <View style={[styles.viewStyle2, { marginTop: 10 }]}>
          <Text
            style={[
              styles.headerText,
              { color: isEnabled == true ? "white" : "black" },
            ]}
          >
            Gender
          </Text>
          <Ionicons
            style={[
              { marginTop: 10 },
              { color: isEnabled == true ? "white" : "black" },
            ]}
            name="help-circle-outline"
            size={20}
          />
        </View>
        <TextInput
          style={styles.textInputStyle3}
          placeholder="Select your gender"
          placeholderTextColor={isEnabled == true ? "grey" : "black"}
          color= {isEnabled == true ? 'white' : 'black' }
        />

        {/*           Mobile Number or Email starts here  */}
        <Text
          style={[
            styles.headerText,
            { marginTop: 15 },
            { color: isEnabled == true ? "white" : "black" },
          ]}
        >
          Mobile number or email address
        </Text>
        <TextInput
          style={[styles.textInputStyle3, { marginBottom: 5 }]}
          placeholder="Mobile number or email address"
          placeholderTextColor={isEnabled == true ? "grey" : "black"}
          color= {isEnabled == true ? 'white' : 'black' }
        />
        <Text style={{ color: isEnabled == true ? "white" : "black" }}>
          You may receive notifications from us.
          <Link href="www.facebook.com">
            {" "}
            Learn why we ask for your contact information
          </Link>
        </Text>

        {/*           Password starts here  */}
        <Text
          style={[
            styles.headerText,
            { marginTop: 15 },
            { color: isEnabled == true ? "white" : "black" },
          ]}
        >
          Password
        </Text>
        <TextInput
          style={[styles.textInputStyle3, { marginBottom: 25 }]}
          placeholder="Password"
          placeholderTextColor={isEnabled == true ? "grey" : "black"}
          color= {isEnabled == true ? 'white' : 'black' }
          secureTextEntry={true}
        />
        <View style={styles.paragraphText}>
          <Text style={{ color: isEnabled == true ? "white" : "black" }}>
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </Text>

          <Text style={{ color: isEnabled == true ? "white" : "black" }}>
            By tapping Submit, you agree to create an account and to Facebook's
            Terms, Privacy Policy and Cookies Policy
          </Text>
          <Text style={{ color: isEnabled == true ? "white" : "black" }}>
            The Privacy Policy describes the way we can use the information we
            collect when you create an account. For example, we use this
            information to provide, personalise and improve our products,
            including ads.
          </Text>
        </View>

        <Pressable
          style={styles.submitButton}
          onPress={() =>
            Alert.alert(
              "Congratulations, you have successfully created an account",
            )
          }
        >
          <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
        </Pressable>
        <Pressable
          style={styles.submitButton2}
          onPress={() =>
            Alert.alert(
              "Already have an account? Please enter your login credentials",
            )
          }
        >
          <Text
            style={[
              { textAlign: "center" },
              { color: isEnabled == true ? "white" : "black" },
            ]}
          >
            I already have an account
          </Text>
        </Pressable>
        <View style={{ marginBottom: 30 }}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  viewStyle2: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  textInputStyle: {
    borderColor: "rgba(204, 200, 200, 0.75)",
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    width: 185,
  },
  textInputStyle2: {
    borderColor: "rgba(204, 200, 200, 0.75)",
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    width: 120,
  },
  textInputStyle3: {
    borderColor: "rgba(204, 200, 200, 0.75)",
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
  },
  paragraphText: {
    flex: 1,
    gap: 10,
    marginBottom: 20,
  },
  submitButton: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(8, 102, 255)",
    borderColor: "rgb(8, 102, 255)",
    borderWidth: 2,
    borderRadius: 25,
    height: 42,
    marginBottom: 10,
  },
  submitButton2: {
    flex: 1,
    justifyContent: "center",
    borderColor: "rgba(204, 200, 200, 0.75)",
    borderWidth: 2,
    borderRadius: 25,
    height: 42,
  },
});
