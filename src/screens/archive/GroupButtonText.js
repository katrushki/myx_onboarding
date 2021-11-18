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

const techGroupData = [
  { value: "C/C++" },
  { value: "C#" },
  { value: "Flutter" },
  { value: "Java" },
  { value: "Javascript" },
  { value: "Perl" },
  { value: "PHP" },
  { value: "Python" },
  { value: "Swift" },
  { value: "Go" },
  { value: "SQL" },
  { value: "R" },
  { value: "React Native" },
  { value: "Ruby" },
  { value: "Rust" },
  { value: "Solidity" },
  { value: "Tableau" },
  { value: "Google Suite" },
  { value: "Trello" },
  { value: "Slack" },
  { value: "JIRA" },
  { value: "Salesforce" },
  { value: "Scrum" },
  { value: "Agile Methodology" },
  { value: "UX/UI design" },
  { value: "QA testing" },
  { value: "Requirements engineering" },
  { value: "Debugging" },
  { value: "Implementation" },
  { value: "Testing" },
  { value: "Configuration" },
  { value: "Mobile Development" },
  { value: "Machine Learning" },
  { value: "Blockchain" },
  { value: "Security" },
  { value: "Algorithms" },
  { value: "Data Science" },
  { value: "Modeling" },
  { value: "Documentation" },
];

const talentGroupData = [
  { value: "Acquisition" },
  { value: "Retention" },
  { value: "Performance Management" },
  { value: "Employer Branding" },
  { value: "Training & Development" },
  { value: "Promotion & Transition" },
  { value: "Change Management" },
  { value: "Organisational Behaviour" },
  { value: "Upskilling" },
  { value: "Reskilling" },
  { value: "Engagement" },
  { value: "Succession" },
  { value: "Organisational Culture" },
  { value: "Internal Mobility" },
  { value: "Knowledge Management" },
  { value: "Remuneration Strategy" },
];

const defaultSelectedIndex_group_insterest = [5];

export default class GroupButton extends Component {
  constructor(props) {
    super(props);

    var selectedValues1 = [];
    defaultSelectedIndex_group_insterest.map((item) => {
      selectedValues1.push(techGroupData[item].value);
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
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ marginLeft: 50, marginTop: 50 }}
              onPress={() => navigation.navigate("BasicInfo")}
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
            What are your areas of expertise?
          </Text>
          <Text style={styles.bodyText}>Select multiple options</Text>
        </View>

        {/**Group button implementation */}
        <ScrollView style= {{flex: 4}}>
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
            Tech
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
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={techGroupData}
          />

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
            Talent (max. 3){" "}
            {_.join(this.state.multipleSelectedData_group_limited, ", ")}
          </Text>
          <SelectMultipleGroupButton
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
            maximumNumberSelected={3}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange_limited(selectedValues)
            }
            group={talentGroupData}
          />
        </ScrollView>
        {/**bottom navigation */}
        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Interests")}
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
    backgroundColor: "#5E18EA",
    flexDirection: "column",
    flex: 1,
  },
  viewButton: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewHeader: {
    flex: 1,
    justifyContent: "center",
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
