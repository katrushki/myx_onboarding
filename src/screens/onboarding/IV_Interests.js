// INTEREST SCREEN - What are your interests? Select as many as you like
import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import _ from "lodash";
import { SelectMultipleGroupButton } from "react-native-selectmultiple-button";
import LogoOBS from "../../components/LogoOBS";
import { Ionicons } from "@expo/vector-icons";
import Images from "../../../assets/Images";

const defaultSelectedIndex_group_insterest = [5];

export default class InterestsOBS extends Component {
  constructor(props) {
    super(props);

    var selectedValues1 = [];
    defaultSelectedIndex_group_insterest.map((item) => {
      selectedValues1.push(interestGroupData[item].value);
    });

    this.state = {
      multipleSelectedData: [],
      multipleSelectedDataLimited: [],
      multipleSelectedData_group: selectedValues1,
      multipleSelectedData_group_limited: [],
    };
  }

  render() {
    return (
      <ImageBackground
        source={Images.basicInfoBackground}
        resizeMode="cover"
        resizeMethod="auto"
        style={styles.viewStyle}
      >
        {/**header navigation */}
        <View style={{ flexDirection: "row", flex: 0.25 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ marginLeft: 50, marginTop: 50 }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons
                name="chevron-back-circle"
                size={35}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <LogoOBS />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        {/**section text */}
        <View style={styles.viewHeader}>
          <Text style={styles.headerText}>
            What are your interests?
          </Text>
          <Text style={styles.bodyText}>Select multiple options</Text>
        </View>

        {/**Group button implementation */}
        <ScrollView style= {{flex: 6}}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 10,
              color: "#FFF",
              marginLeft: 10,
            }}
          >
            Interests
            {/* Tech expertise: {_.join(this.state.multipleSelectedData_group, ", ")} */}
          </Text>
          <SelectMultipleGroupButton
            defaultSelectedIndexes={defaultSelectedIndex_group_insterest}
            containerViewStyle={{
              paddingTop: 10,
              justifyContent: "flex-start",
            }}
            highLightStyle={{
              borderColor: "#FFF",
              backgroundColor: "transparent",
              textColor: "#FFF",
              borderTintColor: "#FFF",
              backgroundTintColor: "#FFF",
              textTintColor: "#5E18EA",
            }}
            textStyle={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: 15,
            }}
            buttonViewStyle= {{
              borderRadius: 13}}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={interestGroupData}
          />

        </ScrollView>
        {/**bottom navigation */}
        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MeetPref")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Ionicons
              name="chevron-forward-circle"
              size={35}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  _groupButtonOnSelectedValuesChange(selectedValues) {
    this.setState({
      multipleSelectedData_group: selectedValues,
    });
  }

  _groupButtonOnSelectedValuesChange_limited(selectedValues) {
    this.setState({
      multipleSelectedData_group_limited: selectedValues,
    });
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    // backgroundColor: "#5E18EA",
    flexDirection: "column",
    flex: 1,
  },
  viewButton: {
    flex: 0.2,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewHeader: {
    flex: 0.15,
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
  },
  buttonStyle: {
    paddingHorizontal: 65,
    paddingVertical: 30,
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 300,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  bodyText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#FFF",
    opacity: 0.75,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 20,
    opacity: 0.5,
    color: "#FFF",
  },
  iconStyle: {
    color: "#FFF",
    opacity: 0.75,
  },
});

const interestGroupData = [
  { value: "Fishing" },
  { value: "Instagram" },
  { value: "Cooking" },
  { value: "Cycling" },
  { value: "Volunteering" },
  { value: "Swimming" },
  { value: "Surfing" },
  { value: "Flea Markets" },
  { value: "Blogging" },
  { value: "Vlogging" },
  { value: "Travel" },
  { value: "Vegetarian" },
  { value: "Vegan" },
  { value: "Snowboarding" },
  { value: "Skiing" },
  { value: "Golf" },
  { value: "Theater" },
  { value: "Climbing" },
  { value: "Walking" },
  { value: "Museum" },
  { value: "Tea" },
  { value: "Coffee" },
  { value: "Craft Beer" },
  { value: "Hiking" },
  { value: "Crossfit" },
  { value: "Running" },
  { value: "Activism" },
  { value: "Football" },
  { value: "Fashion" },
  { value: "Gaming" },
  { value: "Dancing" },
  { value: "Comedy" },
  { value: "Trivia" },
  { value: "Culture" },
  { value: "Foodie" },
  { value: "Photography" },
  { value: "Rock" },
  { value: "Heavy Metal" },
  { value: "Punk" },
  { value: "Pop" },
  { value: "Country" },
  { value: "R&B" },
  { value: "Soul" },
  { value: "Jazz" },
  { value: "Folk" },
  { value: "Electronic" },
  { value: "Classical" },
  { value: "Hip Hop" },
  { value: "Blues" },
  { value: "Funk" },
  { value: "Techno" },
  { value: "Reading" },
  { value: "Movies" },
  { value: "Outdoors" },
  { value: "Netflix" },
  { value: "Festivals" },
  { value: "Art" },
  { value: "Meditation" },
  { value: "Environmentalism" },
  { value: "Basketball" },
  { value: "Volleyball" },
  { value: "Handball" },
  { value: "Hockey" },
  { value: "Baking" },
  { value: "Yoga" },
  { value: "Board Games" },
  { value: "Concerts" },
];