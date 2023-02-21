import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text,TouchableOpacity } from "react-native";
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

const IosComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.iphone14Pro2}>
      <Image
        style={styles.unsplashp5a9mj4vlsIcon}
        resizeMode="cover"
        source={require("../assets/unsplashp5a9mj4vls.png")}
      />
      <StatusContainer
        carImageUrl={require("../assets/right-side.png")}
        propColor="#fff"
      />
      <View style={[styles.iphone14Pro2Inner, styles.frameChildPosition]}>
        <View style={[styles.rectangleParent, styles.frameChildPosition]}>
          <LinearGradient
            style={[styles.frameChild, styles.frameChildPosition]}
            locations={[0, 1]}
            colors={["rgba(3, 29, 30, 0)", "#60219f"]}
          />
          <Pressable style={styles.signinwithapple}>
          <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.navigate("IPhone14Pro5")}
        >
            <View
              style={[styles.sfSymbolApplelogoParent, styles.iconParentFlexBox]}
            >
              <Text style={styles.sfSymbol}>􀣺</Text>
              <Text style={[styles.sfSymbol, styles.ml10]}>
                Continue with Apple
              </Text>
            </View>
            </TouchableOpacity>
          </Pressable>
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
              styles.noMoreFinesPosition,
              styles.noMoreFinesTypo,
              styles.noMoreFinesFlexBox,
            ]}
          >
            No more fines through AI.
          </Text>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.noMoreFinesPosition]} />
          </View>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-46.png")}
          />
          <View style={[styles.frameWrapper, styles.frameFlexBox]}>
            <View style={[styles.rectangleGroup, styles.frameChild2Layout]}>
              <View style={styles.frameInner} />
              <View
                style={[
                  styles.iconCheckCircleParent,
                  styles.parentIconPosition,
                  styles.iconParentFlexBox,
                ]}
              >
                <Image
                  style={styles.iconCheckCircle}
                  resizeMode="cover"
                  source={require("../assets/-icon-check-circle.png")}
                />
                <Image
                  style={[styles.groupItemLayout, styles.ml13]}
                  resizeMode="cover"
                  source={require("../assets/vector-3.png")}
                />
                <Text style={[styles.youTypo, styles.ml13]}>
                  You can park until 11:41
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.iconParentFlexBox]}>
            <View style={[styles.rectangleGroup, styles.frameChild2Layout]}>
              <View style={styles.rectangleView} />
              <View
                style={[
                  styles.iconCreditCardParent,
                  styles.parentIconPosition,
                  styles.iconParentFlexBox,
                ]}
              >
                <Image
                  style={styles.iconCreditCard}
                  resizeMode="cover"
                  source={require("../assets/-icon-credit-card.png")}
                />
                <Image
                  style={[styles.groupItemLayout, styles.ml13]}
                  resizeMode="cover"
                  source={require("../assets/vector-8.png")}
                />
                <Text style={[styles.youTypo, styles.ml13]}>
                  You don’t need to pay
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameView, styles.frameFlexBox]}>
            <View style={[styles.rectangleGroup, styles.frameChild2Layout]}>
              <View
                style={[
                  styles.frameChild2,
                  styles.frameShadowBox,
                  styles.frameChild2Layout,
                ]}
              />
              <View style={[styles.groupParent, styles.parentIconPosition]}>
                <Image
                  style={[styles.groupChild, styles.groupPosition]}
                  resizeMode="cover"
                  source={require("../assets/group-58.png")}
                />
                <Image
                  style={[
                    styles.groupItem,
                    styles.groupPosition,
                    styles.groupItemLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/vector-7.png")}
                />
                <Text style={[styles.youNeedA, styles.youTypo]}>
                  You need a parking disc
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper1, styles.frameShadowBox]}>
            <View
              style={[styles.iconCheckCircleGroup, styles.iconParentFlexBox]}
            >
              <Image
                style={styles.iconCheckCircle}
                resizeMode="cover"
                source={require("../assets/-icon-check-circle1.png")}
              />
              <Image
                style={[styles.groupItemLayout, styles.ml13]}
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
  ml10: {
    marginLeft: 10,
  },
  ml13: {
    marginLeft: Margin.m_lg,
  },
  frameChildPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  iconParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  noMoreFinesFlexBox: {
    width: 139,
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    alignItems: "center",
  },
  noMoreFinesPosition: {
    left: "50%",
    position: "absolute",
  },
  noMoreFinesTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameChild2Layout: {
    width: 294,
    height: 62,
  },
  parentIconPosition: {
    top: 14,
    position: "absolute",
  },
  frameShadowBox: {
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
    position: "absolute",
  },
  groupPosition: {
    top: 1,
    position: "absolute",
  },
  groupItemLayout: {
    width: 1,
    borderRadius: Border.br_lg,
    height: 31,
  },
  youTypo: {
    width: 204,
    color: Color.midnightblue_200,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    height: 34,
    display: "flex",
    lineHeight: 11,
    textAlign: "left",
    letterSpacing: 0,
    alignItems: "center",
  },
  unsplashp5a9mj4vlsIcon: {
    width: 484,
    height: 861,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: 371,
    height: 431,
    backgroundColor: "transparent",
  },
  sfSymbol: {
    fontSize: FontSize.defaultBoldBody1_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody1,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
  },
  sfSymbolApplelogoParent: {
    justifyContent: "center",
  },
  signinwithapple: {
    top: 660,
    left: 62,
    width: 268,
    paddingLeft: 40,
    paddingTop: Padding.p_md,
    paddingRight: 54,
    paddingBottom: Padding.p_md,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_2xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.black,
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
    top: 710,
    left: 127,
    fontSize: FontSize.size_3xs,
    height: 40,
    lineHeight: 11,
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  noMoreFines: {
    marginLeft: -68.5,
    top: 588,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    justifyContent: "center",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.lightgray,
    width: 134,
    height: 5,
    borderRadius: Border.br_2xl,
    left: "50%",
  },
  homeindicator: {
    top: 767,
    left: 9,
    width: 375,
    height: 34,
    position: "absolute",
  },
  frameItem: {
    top: 518,
    left: 170,
    width: 55,
    height: 55,
    position: "absolute",
  },
  frameInner: {
    shadowColor: "rgba(11, 49, 50, 0.3)",
    borderColor: "#1c0332",
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
    height: 62,
    width: 294,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconCheckCircle: {
    width: 31,
    height: 31,
  },
  iconCheckCircleParent: {
    left: 23,
  },
  rectangleGroup: {
    height: 62,
  },
  frameWrapper: {
    top: 76,
    left: 88,
    width: 290,
    height: 59,
  },
  rectangleView: {
    shadowColor: "rgba(11, 49, 50, 0.29)",
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
    height: 62,
    width: 294,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconCreditCard: {
    width: 33,
    height: 25,
  },
  iconCreditCardParent: {
    left: 31,
  },
  frameContainer: {
    top: 182,
    left: 34,
    width: 291,
    position: "absolute",
  },
  frameChild2: {
    height: 62,
    left: 0,
    top: 0,
  },
  groupChild: {
    width: 32,
    height: 32,
    left: 0,
  },
  groupItem: {
    left: 45,
  },
  youNeedA: {
    left: 60,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    left: 11,
    width: 264,
    height: 34,
  },
  frameView: {
    top: 288,
    left: 84,
    height: 62,
  },
  iconCheckCircleGroup: {
    paddingLeft: Padding.p_md,
    paddingRight: Padding.p_xs,
  },
  frameWrapper1: {
    top: 393,
    left: 18,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_md,
  },
  rectangleParent: {
    top: 2,
    height: 802,
    overflow: "hidden",
  },
  iphone14Pro2Inner: {
    top: 48,
    height: 804,
    overflow: "hidden",
  },
  iphone14Pro2: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.black,
  },
});

export default IosComponent;
