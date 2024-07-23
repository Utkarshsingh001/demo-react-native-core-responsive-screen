import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {moderateScale} from 'react-native-core-responsive-screen';
const Login = ({landscape}) => {
  const [email, setEmail] = useState('');
  const handleOnChange = text => {
    setEmail(text);
  };
  return (
    <View>
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={landscape ? styles.lheader : styles.header}>
          <Text style={landscape ? styles.lHeaderText : styles.headerText}>
            {landscape ? 'Landscape' : 'Portrait'}
          </Text>
        </View>

        <View style={landscape ? styles.lLoginC : styles.loginC}>
          <Text style={landscape ? styles.LloginText : styles.loginText}>
            Login
          </Text>
        </View>
        <View style={landscape ? styles.lLabelEmail : styles.labelEmail}>
          <Text
            style={landscape ? styles.lLableTextEmail : styles.lableTextEmail}>
            Email
          </Text>
        </View>
        <View style={landscape ? styles.lEmailC : styles.emailC}>
          <TextInput
            onChange={handleOnChange}
            value={email}
            style={landscape ? styles.lTextEmail : styles.textEmail}
          />
        </View>
        <View style={landscape ? styles.lLabelPassword : styles.labelPassword}>
          <Text
            style={
              landscape ? styles.lLableTextPassword : styles.lableTextPassword
            }>
            Password
          </Text>
        </View>
        <View
          style={
            landscape
              ? [styles.lEmailC, {marginTop: moderateScale(5)}]
              : [styles.emailC, {marginTop: moderateScale(5)}]
          }>
          <TextInput
            onChange={handleOnChange}
            value={email}
            style={landscape ? styles.lTextEmail : styles.textEmail}
          />
        </View>
        <TouchableOpacity style={landscape ? styles.lButtonC : styles.buttonC}>
          <Text style={landscape ? styles.lButtonText : styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  lheader: {alignItems: 'center'},
  headerText: {fontSize: moderateScale(20), color: 'red'},
  lHeaderText: {fontSize: moderateScale(28), color: 'green'},
  LloginText: {fontSize: moderateScale(22), color: 'black'},
  loginText: {fontSize: moderateScale(34), color: 'black'},
  loginC: {marginTop: moderateScale(40), alignItems: 'center'},
  lLoginC: {marginTop: moderateScale(30), alignItems: 'center'},
  lLabelEmail: {
    width: moderateScale(500),
    paddingHorizontal: moderateScale(10),
    alignItems: 'flex-start',
  },
  labelEmail: {
    width: moderateScale(350),
    paddingHorizontal: moderateScale(10),
    alignItems: 'flex-start',
  },
  lLabelPassword: {
    marginTop: moderateScale(30),
    width: moderateScale(500),
    paddingHorizontal: moderateScale(10),
    alignItems: 'flex-start',
  },
  labelPassword: {
    marginTop: moderateScale(30),
    width: moderateScale(350),
    paddingHorizontal: moderateScale(10),
    alignItems: 'flex-start',
  },
  lLableTextEmail: {
    fontSize: moderateScale(9),
  },
  lableTextEmail: {
    fontSize: moderateScale(10),
  },
  lLableTextPassword: {fontSize: moderateScale(9)},
  lableTextPassword: {fontSize: moderateScale(10)},
  lEmailC: {
    marginTop: moderateScale(5),
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    width: moderateScale(500),
    justifyContent: 'center',
    borderRadius: 8,
  },
  emailC: {
    borderRadius: 8,
    marginTop: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: 'black',
    width: moderateScale(350),
  },
  lTextEmail: {
    fontSize: moderateScale(14),

    width: moderateScale(450),
  },

  textEmail: {
    fontSize: moderateScale(14),

    width: moderateScale(335),
  },
  lButtonC: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(500),
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: moderateScale(60),
    backgroundColor: 'black',
  },
  buttonC: {
    marginTop: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(350),
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'black',
  },
  lButtonText: {
    fontSize: moderateScale(18),
    color: 'white',
  },
  buttonText: {
    fontSize: moderateScale(16),

    color: 'white',
  },
});
