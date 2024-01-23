/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";

export const AppStyles = {
  color: {
    main: "#5ea23a", //green
    text: "#696969", //black
    title: "#464646", //black
    subtitle: "#545454", //black
    categoryTitle: "#161616", //black
    primaryColor: '#ee502c', //red
    secondaryColor: '#1d6495', //blue
    tint: "#ff5a66", //red
    secColor: '#201f2b', //black
    error: "#ff0000", //red
    description: "#bbbbbb", //grey
    filterTitle: "#8a8a8a", //grey
    starRating: "#2bdf85", //green
    location: "#a9a9a9", //grey
    white: "#fff", //white
    black: '#000',  //black
    facebook: "#4267b2", //blue
    grey: "grey", //grey
    greenBlue: "#00aea8", //green
    placeholder: "#a0a0a0", //grey
    background: "#f2f2f2", //white
    blue: "#3293fe" //blue
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%",
    full: "100%"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};

export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.primaryColor,
    width: 25,
    height: 25
  },
  images: {
    logo: require('../assests/icons/googleicon.png'),
  }
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.primaryColor,
    marginRight: 10,
    fontWeight: "normal",
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});
