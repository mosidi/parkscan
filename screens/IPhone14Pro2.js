import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusContainer from "../components/StatusContainer";
import { useNavigation } from "@react-navigation/native";
import ScanContainer from "../components/ScanContainer";
import ParkingDiscContainer from "../components/ParkingDiscContainer";
import ImageContainer from "../components/ImageContainer";
import ParkContainer from "../components/ParkContainer";
import {
  Color,
  FontFamily,
  Border,
  Padding,
  FontSize,
  Margin,
} from "../GlobalStyles";

const IPhone14Pro2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14Pro2, styles.iphone14Pro2Bg]}>
      <Image
        style={[
          styles.unsplashp5a9mj4vlsIcon,
          styles.iphone14Pro2InnerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls1.png")}
      />
      <StatusContainer
        carImageUrl={require("../assets/right-side.png")}
        propColor="#fff"
      />
      <LinearGradient
        style={[styles.iphone14Pro2Child, styles.homeindicatorPosition]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#60219f"]}
      />
      <TouchableOpacity
        style={[styles.signinwithapple, styles.iphone14Pro2Bg]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro5")}
      >
        <View style={styles.appleLogo}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector19.png")}
          />
        </View>
        <Text style={[styles.continueWithApple, styles.ml11]}>
          Continue with Apple
        </Text>
      </TouchableOpacity>
      <Text
        style={[styles.byContinuingYouContainer, styles.noMoreFinesFlexBox]}
      >
        <Text style={styles.byContinuingYouContainer1}>
          <Text style={styles.byContinuingYouAgreeToOur}>
            <Text
              style={styles.byContinuingYou}
            >{`By continuing you agree to our `}</Text>
          </Text>
          <Text style={styles.termsOfUsePrivacyPolicy}>
            <Text>Terms of Use</Text>
            <Text>{` & `}</Text>
            <Text style={styles.noMoreFinesTypo}>Privacy Policy</Text>
          </Text>
        </Text>
      </Text>
      <Text
        style={[
          styles.noMoreFines,
          styles.noMoreFinesTypo,
          styles.noMoreFinesFlexBox,
        ]}
      >
        No more fines through AI.
      </Text>
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={styles.iphone14Pro2Item}
        resizeMode="cover"
        source={require("../assets/group-461.png")}
      />
      <ScanContainer
        iconCheckCircle={require("../assets/-icon-check-circle5.png")}
        vector9={require("../assets/vector-94.png")}
      />
      <ParkingDiscContainer
        group59={require("../assets/group-591.png")}
        vector9={require("../assets/vector-95.png")}
      />
      <ImageContainer
        carImageUrl={require("../assets/vector20.png")}
        vehicleImageUrl={require("../assets/vector-96.png")}
      />
      <ParkContainer
        carImageUrl={require("../assets/-icon-check-circle6.png")}
        vehicleImageUrl={require("../assets/vector-97.png")}
      />
      <View
        style={[styles.iphone14Pro2Inner, styles.iphone14Pro2InnerPosition]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-31.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml11: {
    marginLeft: 11,
  },
  iphone14Pro2Bg: {
    backgroundColor: Color.black,
    overflow: "hidden",
  },
  iphone14Pro2InnerPosition: {
    top: "50%",
    position: "absolute",
  },
  homeindicatorPosition: {
    bottom: "0%",
    position: "absolute",
  },
  noMoreFinesFlexBox: {
    width: 157,
    textAlign: "center",
    display: "flex",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  noMoreFinesTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  unsplashp5a9mj4vlsIcon: {
    marginTop: -426,
    right: -65,
    maxWidth: "100%",
    height: 861,
    left: 0,
    overflow: "hidden",
  },
  iphone14Pro2Child: {
    height: "50.59%",
    top: "49.41%",
    right: 0,
    backgroundColor: "transparent",
    left: 0,
  },
  vectorIcon: {
    width: 14,
    height: 18,
  },
  appleLogo: {
    borderRadius: Border.br_xl,
    width: 19,
    height: 22,
    paddingHorizontal: 2,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  continueWithApple: {
    fontSize: FontSize.defaultBoldBody1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody1,
    textAlign: "left",
    width: 174,
    height: 23,
    display: "flex",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    alignItems: "center",
  },
  signinwithapple: {
    height: "5.9%",
    top: "83.25%",
    right: 65,
    bottom: "10.85%",
    left: 62,
    paddingHorizontal: 40,
    paddingVertical: Padding.p_lg,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xl,
    position: "absolute",
    overflow: "hidden",
  },
  byContinuingYou: {
    fontFamily: FontFamily.dMSansRegular,
  },
  byContinuingYouAgreeToOur: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  termsOfUsePrivacyPolicy: {
    margin: Margin.m_sm,
  },
  byContinuingYouContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  byContinuingYouContainer: {
    height: "4.69%",
    top: "89.2%",
    left: 127,
    fontSize: FontSize.size_4xs,
    lineHeight: 11,
  },
  noMoreFines: {
    height: "4.11%",
    top: "74.88%",
    left: 128,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
  },
  homeIndicator: {
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
    borderRadius: Border.br_3xl,
  },
  homeindicator: {
    height: "2.46%",
    top: "97.54%",
    right: 9,
    left: 10,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iphone14Pro2Item: {
    height: "6.46%",
    marginLeft: -26.5,
    top: "66.67%",
    bottom: "26.88%",
    left: "50%",
    maxHeight: "100%",
    width: 58,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_md,
    width: 1,
    height: 31,
  },
  iphone14Pro2Inner: {
    marginTop: -280,
    right: 121,
    left: 168,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iphone14Pro2: {
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone14Pro2;
