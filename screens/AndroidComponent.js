import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusContainer from "../components/StatusContainer";
import {
  Margin,
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
} from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AndroidComponent = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.iphone14Pro4} >
      <Image
        style={styles.unsplashp5a9mj4vlsIcon}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls.png")}
      />
      <LinearGradient
        style={[styles.iphone14Pro4Child, styles.frameParentLayout]}
        locations={[0, 1]}
        colors={["rgba(3, 29, 30, 0)", "#5f209f"]}
      />
      <StatusContainer carImageUrl={require("../assets/right-side.png")} />
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
      <Image
        style={styles.iphone14Pro4Item}
        resizeMode="cover"
        source={require("../assets/group-46.png")}
      />
      <Image
        style={[styles.iconCheckCircle, styles.iconCardLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check-circle.png")}
      />
      <Image
        style={[
          styles.iphone14Pro4Inner,
          styles.innerLayout,
          styles.iphone14Position,
        ]}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.innerLayout]}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.iconCreditCard, styles.iconCardLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-credit-card.png")}
      />
      <Image
        style={[
          styles.iphone14Pro4Child1,
          styles.innerLayout,
          styles.iphone14Position,
        ]}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.iconLocationPin, styles.iconCardLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-location-pin.png")}
      />
      <Pressable style={styles.logGoogle}>
      <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.navigate("IPhone14Pro5")}
        >

        <View style={[styles.googleParent, styles.parentFlexBox]}>
          <Image
            style={styles.googleIcon}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
          <Text style={[styles.continueWithGoogle, styles.ml33]}>
            Continue with Google
          </Text>
        </View>
        </TouchableOpacity>
      </Pressable>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.groupLayout]} />
          <Image
            style={[styles.iconCheckCircle1, styles.iconCardLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-check-circle1.png")}
          />
          <Image
            style={[styles.frameItem, styles.itemGroupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-3.png")}
          />
          <Text style={[styles.youCanPark, styles.youTypo, styles.youTypo1]}>
            You can park until 11:41
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={styles.groupChild} />
          <Image
            style={[styles.iconCreditCard1, styles.iconCardLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-credit-card1.png")}
          />
          <Image
            style={[styles.groupItem, styles.itemGroupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-8.png")}
          />
          <Text style={[styles.youDontNeed, styles.youTypo, styles.youTypo1]}>
            You don’t need to pay
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View
            style={[
              styles.groupInner,
              styles.groupInnerShadowBox,
              styles.groupLayout,
            ]}
          />
          <Image
            style={[styles.groupChild1, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-151.png")}
          />
          <Image
            style={[styles.groupChild2, styles.itemGroupLayout]}
            resizeMode="cover"
            source={require("../assets/vector-7.png")}
          />
          <Text style={[styles.youNeedA, styles.youTypo, styles.youTypo1]}>
            You need a parking disc
          </Text>
          <Image
            style={[styles.iconLocationPin1, styles.iconCardLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-location-pin1.png")}
          />
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameContainer, styles.groupInnerShadowBox]}>
            <View style={[styles.iconCheckCircleParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconCheckCircle2}
                resizeMode="cover"
                source={require("../assets/-icon-check-circle2.png")}
              />
              <Image
                style={[styles.frameInner, styles.ml13, styles.innerLayout]}
                resizeMode="cover"
                source={require("../assets/vector-9.png")}
              />
              <Text style={[styles.youTypo, styles.ml13]}>
                Get 15 scans for free!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1,
    position:"absolute" },
    textWrapper: {
      height: hp('114%'), // 70% of height device screen
      width: wp('100%')   // 80% of width device screen
    },
    myText: {
      fontSize: hp('5%') // End result looks like the provided UI mockup
    },
  ml33: {
    marginLeft: 33,
  },
  ml13: {
    marginLeft: Margin.m_lg,
  },
  frameParentLayout: {
    width: 393,
    position: "absolute",
  },
  noMoreFinesFlexBox: {
    width: 139,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  noMoreFinesTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  iconCardLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  innerLayout: {
    width: 1,
    borderRadius: Border.br_lg,
    height: 31,
  },
  iphone14Position: {
    left: 142,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupLayout: {
    width: 294,
    height: 62,
  },
  itemGroupLayout: {
    top: 16,
    height: 31,
    width: 1,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  youTypo: {
    height: 34,
    width: 204,
    textAlign: "left",
    color: Color.midnightblue_200,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    // lineHeight: 11,
    letterSpacing: 0,
  },
  youTypo1: {
    top: 14,
    width: 204,
    textAlign: "left",
    color: Color.midnightblue_200,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupInnerShadowBox: {
    shadowColor: "rgba(11, 49, 50, 0.31)",
    borderColor: "#0b3132",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_sm,
    top: 0,
    position: "absolute",
  },
  unsplashp5a9mj4vlsIcon: {
    width: 484,
    height: 861,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone14Pro4Child: {
    top: 422,
    height: 431,
    backgroundColor: "transparent",
    left: 0,
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
    top: 761,
    left: 127,
    fontSize: FontSize.size_3xs,
    height: 40,
    lineHeight: 11,
    display: "flex",
    letterSpacing: 0,
  },
  noMoreFines: {
    marginLeft: -68.5,
    top: 639,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
    display: "flex",
    letterSpacing: 0,
    fontWeight: "500",
  },
  iphone14Pro4Item: {
    top: 569,
    left: 170,
    width: 55,
    height: 55,
    position: "absolute",
  },
  iconCheckCircle: {
    height: "3.67%",
    width: "7.95%",
    top: "16.9%",
    right: "66.86%",
    bottom: "79.43%",
    left: "25.19%",
  },
  iphone14Pro4Inner: {
    top: 145,
    height: 31,
  },
  vectorIcon: {
    top: 250,
    left: 76,
    height: 31,
    position: "absolute",
  },
  iconCreditCard: {
    height: "2.93%",
    width: "8.3%",
    top: "29.93%",
    right: "83.31%",
    bottom: "67.14%",
    left: "8.4%",
  },
  iphone14Pro4Child1: {
    top: 355,
    height: 31,
  },
  ellipseIcon: {
    top: 354,
    left: 100,
  },
  iconLocationPin: {
    height: "2.43%",
    width: "5.07%",
    top: "42.02%",
    right: "68.21%",
    bottom: "55.55%",
    left: "26.72%",
  },
  googleIcon: {
    width: 30,
    height: 30,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  continueWithGoogle: {
    fontSize: FontSize.defaultBoldBody1_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
  },
  googleParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logGoogle: {
    top: 711,
    left: 47,
    backgroundColor: "#f85531",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "flex-end",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    justifyContent: "center",
    position: "absolute",
  },
  frameChild: {
    left: -2,
    shadowColor: "rgba(11, 49, 50, 0.3)",
    borderColor: "#1c0332",
    height: 62,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_sm,
    width: 294,
    top: 0,
    position: "absolute",
  },
  iconCheckCircle1: {
    height: "52.96%",
    width: "10.77%",
    top: "26.06%",
    right: "82.16%",
    bottom: "20.98%",
    left: "7.07%",
  },
  frameItem: {
    left: 64,
  },
  youCanPark: {
    left: 78,
  },
  rectangleParent: {
    top: 74,
    left: 88,
    width: 290,
    height: 59,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(11, 49, 50, 0.29)",
    borderColor: "#0b3132",
    height: 62,
    width: 294,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconCreditCard1: {
    height: "40.32%",
    width: "11.09%",
    top: "29.84%",
    right: "78.36%",
    bottom: "29.84%",
    left: "10.54%",
  },
  groupItem: {
    left: 76,
  },
  youDontNeed: {
    left: 90,
  },
  rectangleGroup: {
    top: 180,
    left: 33,
    height: 62,
    position: "absolute",
  },
  groupInner: {
    height: 62,
    left: 0,
  },
  groupChild1: {
    top: 15,
    left: 16,
  },
  groupChild2: {
    left: 61,
  },
  youNeedA: {
    left: 74,
  },
  iconLocationPin1: {
    height: "33.39%",
    width: "6.78%",
    top: "32.26%",
    right: "85.74%",
    bottom: "34.35%",
    left: "7.48%",
  },
  rectangleContainer: {
    top: 286,
    left: 84,
    height: 62,
    position: "absolute",
  },
  iconCheckCircle2: {
    width: 31,
    height: 31,
  },
  frameInner: {
    height: 31,
  },
  iconCheckCircleParent: {
    paddingLeft: Padding.p_md,
    paddingRight: Padding.p_xs,
    flexDirection: "row",
  },
  frameContainer: {
    left: -1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_md,
  },
  frameWrapper: {
    top: 391,
    left: 18,
    width: 275,
    height: 62,
    position: "absolute",
  },
  frameParent: {
    top: 56,
    left: -3,
    height: 469,
    overflow: "hidden",
  },
  iphone14Pro4: {
    backgroundColor: Color.black,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
});




export default AndroidComponent;
