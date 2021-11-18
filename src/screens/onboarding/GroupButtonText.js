import React, { Component } from "react";

import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";

import _ from "lodash";
import { SelectMultipleGroupButton } from "react-native-selectmultiple-button";
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
    { value: "Remuneration Strategy" }
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
      multipleSelectedData_group_limited: []

    };
  };

  render() {
    return (
      <ImageBackground
        source={Images.basicInfoBackground}
        resizeMode="cover"
        resizeMethod="auto"
        style={{ flex: 1 }}
      >
        <ScrollView>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 20,
              fontWeight: 'bold',
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
              fontWeight: 'bold',
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


};

const styles = StyleSheet.create({
  welcome: {
    margin: 10,
    // marginTop: 30,
    color: "#FFF",
  },
});
