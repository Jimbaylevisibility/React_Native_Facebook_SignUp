import { Text, View, Image, ScrollView, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Link } from "expo-router";

export default function Index() {
  return (
      <ScrollView style={{flex: 1, marginHorizontal: 15}}>
          <View
            style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 18,
            gap: 5
            }}
          >
          <Image style={{width: 25, height: 25}} source={require('../assets/images/meta.png')} />
          <Text style={{fontSize: 20, fontWeight: "bold"} }>Meta</Text>
          </View>
          <Text style={{fontSize: 20, fontWeight: "700"}}>Get Started on Facebook</Text>
          <Text style={{marginBottom: 10}}>Create an account to connect with friends, families and
              communities of people who share your interests.
          </Text>
{/*           Names starts here  */}
          <Text style={styles.headerText}>Name</Text>
          <View style={styles.viewStyle}>
              <TextInput
              style={styles.textInputStyle}
              placeholder='First name'
              />
              <TextInput
              style={styles.textInputStyle}
              placeholder='Surname'
              />
          </View>
{/*           Date of Birth starts here  */}
          <View style={[styles.viewStyle2, {marginTop: 10}]}>
              <Text style={styles.headerText}>Date of birth</Text>
              <Ionicons
              style={{marginTop: 10}}
              name="help-circle-outline"
              size={20}
              />
          </View>
          <View style={styles.viewStyle}>
              <TextInput
              style={styles.textInputStyle2}
              placeholder="Day"
              keyboardType="numeric"
              />
              <TextInput
              style={styles.textInputStyle2}
              placeholder="Month"
              keyboardType="numeric"
              />
              <TextInput
              style={styles.textInputStyle2}
              placeholder="Year"
              keyboardType="numeric"
              />
          </View>

{/*           Gender starts here  */}
          <View style={[styles.viewStyle2, {marginTop: 10}]}>
            <Text style={styles.headerText}>Gender</Text>
            <Ionicons
            style={{marginTop: 10}}
            name="help-circle-outline"
            size={20}
            />
          </View>
          <TextInput
          style={styles.textInputStyle3}
          placeholder='Select your gender'
          />

{/*           Mobile Number or Email starts here  */}
          <Text style={[styles.headerText, {marginTop: 15}]}>Mobile number or email address</Text>
          <TextInput
          style={[styles.textInputStyle3, {marginBottom: 5}]}
          placeholder='Mobile number or email address'
          />
          <Text>You may receive notifications from us.
            <Link href='www.facebook.com'> Learn why we ask for your
                contact information</Link>
          </Text>

{/*           Password starts here  */}
          <Text style={[styles.headerText, {marginTop: 15}]}>Password</Text>
          <TextInput
          style={[styles.textInputStyle3, {marginBottom: 25}]}
          placeholder='Password'
          />
          <View style={styles.paragraphText}>
              <Text>People who use our service may have uploaded your contact information
                    to Facebook. Learn more.
              </Text>

              <Text>By tapping Submit, you agree to create an account and to Facebook's
                    Terms, Privacy Policy and Cookies Policy
              </Text>
              <Text>The Privacy Policy describes the way we can use the information we
                    collect when you create an account. For example, we use this information
                    to provide, personalise and improve our products, including ads.
              </Text>
          </View>

          <Pressable
          style={styles.submitButton}
          onPress={()=> Alert.alert("Congratulations, you have successfully created an account") }
          >
              <Text style={{color: "white", textAlign: "center"}}>Submit</Text>
          </Pressable>
          <Pressable
          style={styles.submitButton2}
          onPress={()=> Alert.alert("Already have an account? Please enter your login credentials")}
          >
              <Text style={{textAlign: "center"}}>I already have an account</Text>
          </Pressable>
          <View style={{marginBottom: 30}}></View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        flexDirection: "row",
        gap: 10
        },
    viewStyle2:{
        flex: 1,
        flexDirection: "row",
        gap: 3
        },
    headerText: {
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 10
        },
    textInputStyle:{
        borderColor: "rgba(204, 200, 200, 0.75)",
        borderWidth: 2,
        borderRadius: 15,
        height: 50,
        width: 185
        },
    textInputStyle2:{
        borderColor: "rgba(204, 200, 200, 0.75)",
        borderWidth: 2,
        borderRadius: 15,
        height: 50,
        width: 120
        },
    textInputStyle3:{
        borderColor: "rgba(204, 200, 200, 0.75)",
        borderWidth: 2,
        borderRadius: 15,
        height: 50,
        },
    paragraphText: {
        flex: 1,
        gap: 10,
        marginBottom: 20
        },
    submitButton:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgb(8, 102, 255)",
        borderColor: "rgb(8, 102, 255)",
        borderWidth: 2,
        borderRadius: 25,
        height: 42,
        marginBottom: 10
        },
    submitButton2:{
        flex: 1,
        justifyContent: "center",
        borderColor: "rgba(204, 200, 200, 0.75)",
        borderWidth: 2,
        borderRadius: 25,
        height: 42,
        }
    })
