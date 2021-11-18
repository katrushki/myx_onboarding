import React, { Component } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";

import _ from "lodash";
import { SelectMultipleGroupButton } from "react-native-selectmultiple-button";

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

const talentGroupData = [];
const radioGroupData = [
  { value: "Female", displayValue: "F" },
  { value: "Male", displayValue: "M" },
  { value: "Other", displayValue: "O" },
  { value: "Rather not say", displayValue: "R" },
];

const defaultSelectedIndex_group_insterest = [0];
const defaultSelectedIndex_group_gender = [1];

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
      radioSelectedData: "",
      multipleSelectedData_group: selectedValues1,
      multipleSelectedData_group_limited: [],
      radioSelectedData_group:
        radioGroupData[defaultSelectedIndex_group_gender[0]].value,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={{ color: "#EAA418", marginLeft: 10 }}>
            Tech
            {/* Tech expertise: {_.join(this.state.multipleSelectedData_group, ", ")} */}
          </Text>
          <SelectMultipleGroupButton
            defaultSelectedIndexes={defaultSelectedIndex_group_insterest}
            containerViewStyle={{ justifyContent: "flex-start" }}
            highLightStyle={{
              borderColor: "gray",
              backgroundColor: "transparent",
              textColor: "gray",
              borderTintColor: "#EAA418",
              backgroundTintColor: "transparent",
              textTintColor: "#EAA418",
            }}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={techGroupData}
          />

          <Text style={{ color: "#EAA418", marginLeft: 10 }}>
            Talent expertise: (max. 3){" "}
            {_.join(this.state.multipleSelectedData_group_limited, ", ")}
          </Text>
          <SelectMultipleGroupButton
            containerViewStyle={{ justifyContent: "flex-start" }}
            highLightStyle={{
              borderColor: "gray",
              backgroundColor: "transparent",
              textColor: "gray",
              borderTintColor: "#EAA418",
              backgroundTintColor: "transparent",
              textTintColor: "#EAA418",
            }}
            maximumNumberSelected={3}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange_limited(selectedValues)
            }
            group={techGroupData}
          />
          <View style={{ height: 1, backgroundColor: "gray", marginTop: 20 }} />

          <Text style={styles.welcome}>
            implement the radio-select buttons demo by SelectMultipleGroupButton
          </Text>
          <Text style={{ color: "green", marginLeft: 10 }}>
            I am {this.state.radioSelectedData_group}
          </Text>
          <SelectMultipleGroupButton
            multiple={false}
            defaultSelectedIndexes={defaultSelectedIndex_group_gender}
            containerViewStyle={{ flexDirection: "column", width: 100 }}
            highLightStyle={{
              borderColor: "gray",
              backgroundColor: "transparent",
              textColor: "gray",
              borderTintColor: "green",
              backgroundTintColor: "green",
              textTintColor: "white",
            }}
            buttonViewStyle={{ width: 40, height: 40, borderRadius: 20 }}
            singleTap={(valueTap) => {
              this._onRadioGroupButtonSingleTap(valueTap);
            }}
            group={radioGroupData}
          />
        </ScrollView>
      </View>
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

  _onRadioGroupButtonSingleTap(valueTap) {
    this.setState({
      radioSelectedData_group: valueTap,
    });
  }
}

const styles = StyleSheet.create({
  welcome: {
    margin: 10,
    // marginTop: 30,
    color: "gray",
  },
});
