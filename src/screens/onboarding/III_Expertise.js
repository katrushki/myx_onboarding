// EXPERTISE SCREEN - What are your areas of expertise? Select as many as you like
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

const defaultSelectedIndex_group_interest = [];

export default class ExpertiseOBS extends Component {
  constructor(props) {
    super(props);

    var selectedValues1 = [];
    defaultSelectedIndex_group_interest.map((item) => {
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
        <View style={{ flexDirection: "row", flex: 0.25 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ marginLeft: 50, marginTop: 50 }}
              onPress={() => this.props.navigation.navigate("BasicInfo")}
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
        <ScrollView style={{ flex: 6 }}>
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
            defaultSelectedIndexes={defaultSelectedIndex_group_interest}
            containerViewStyle={{
              paddingVertical: 10,
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
            buttonViewStyle={{
              borderRadius: 13,
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
            Talent{" "}
          </Text>
          <SelectMultipleGroupButton
            containerViewStyle={{
              paddingVertical: 10,
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
            buttonViewStyle={{
              borderRadius: 13,
            }}
            // maximumNumberSelected={5}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange_limited(selectedValues)
            }
            group={talentGroupData}
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
            Management
          </Text>
          <SelectMultipleGroupButton
            defaultSelectedIndexes={defaultSelectedIndex_group_interest}
            containerViewStyle={{
              paddingVertical: 10,
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
            buttonViewStyle={{
              borderRadius: 13,
            }}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={managementGroupData}
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
            Design
          </Text>
          <SelectMultipleGroupButton
            defaultSelectedIndexes={defaultSelectedIndex_group_interest}
            containerViewStyle={{
              paddingVertical: 10,
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
            buttonViewStyle={{
              borderRadius: 13,
            }}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={designGroupData}
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
            Marketing & Sales
          </Text>
          <SelectMultipleGroupButton
            defaultSelectedIndexes={defaultSelectedIndex_group_interest}
            containerViewStyle={{
              paddingVertical: 10,
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
            buttonViewStyle={{
              borderRadius: 13,
            }}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={marketing_salesGroupData}
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
            Finance
          </Text>
          <SelectMultipleGroupButton
            defaultSelectedIndexes={defaultSelectedIndex_group_interest}
            containerViewStyle={{
              paddingVertical: 10,
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
            buttonViewStyle={{
              borderRadius: 13,
            }}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={financeGroupData}
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
            Product
          </Text>
          <SelectMultipleGroupButton
            defaultSelectedIndexes={defaultSelectedIndex_group_interest}
            containerViewStyle={{
              paddingVertical: 10,
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
            buttonViewStyle={{
              borderRadius: 13,
            }}
            onSelectedValuesChange={(selectedValues) =>
              this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={productGroupData}
          />
        </ScrollView>

        {/**bottom navigation */}

        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Interests")}
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
    flex: 0.25,
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

// list of arrays

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
  { value: "QA testing" },
  { value: "Requirements Engineering" },
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
  { value: "Intercultural Management" },
  { value: "Knowledge Management" },
  { value: "Remuneration Strategy" },
];

const managementGroupData = [
  { value: "Accuracy" },
  { value: "Achieving Goals" },
  { value: "Administration" },
  { value: "Analytical" },
  { value: "Budget Management" },
  { value: "Collaboration" },
  { value: "Communication" },
  { value: "Conflict Management" },
  { value: "Conflict Resolution" },
  { value: "Coordination" },
  { value: "Critical Thinking" },
  { value: "Decision Making" },
  { value: "Development" },
  { value: "Emotional Intelligence" },
  { value: "Empathy" },
  { value: "Empowerment" },
  { value: "Engagement" },
  { value: "Goal-oriented" },
  { value: "Hiring" },
  { value: "Innovation" },
  { value: "Interpersonal" },
  { value: "Leadership" },
  { value: "Legal" },
  { value: "Listening" },
  { value: "Logistics" },
  { value: "Motivation" },
  { value: "Networking" },
  { value: "Negotiation" },
  { value: "Operations" },
  { value: "Persuasion" },
  { value: "Planning" },
  { value: "Presentation" },
  { value: "Problem Solving" },
  { value: "Project Management" },
  { value: "Process Management" },
  { value: "Public Speaking" },
  { value: "Research" },
  { value: "Sales" },
  { value: "Strategic Partnerships" },
  { value: "Strategic Planning" },
  { value: "Supply Chain" },
  { value: "Team Building" },
  { value: "Team Manager" },
  { value: "Team Player" },
  { value: "Time Management" },
  { value: "Training" },
  { value: "Writing" },
];
const marketing_salesGroupData = [
  { value: "Communication" },
  { value: "Creative Thinking" },
  { value: "Aesthetic Sensibility" },
  { value: "Writing Skills" },
  { value: "Analytical Skills" },
  { value: "Cold Calling" },
  { value: "Storytelling" },
  { value: "Negotiation" },
  { value: "SEO/SEM" },
  { value: "PPC" },
  { value: "Paid/Social Media" },
  { value: "CRO" },
  { value: "Email Marketing" },
  { value: "Funnel Management" },
  { value: "Brand Management" },
  { value: "CRM" },
  { value: "Data Visualisation" },
  { value: "CMS Tools" },
  { value: "Adwords" },
  { value: "Facebook Paid Ads" },
  { value: "Google Analytics" },
  { value: "MailChimp" },
  { value: "GetResponse" },
  { value: "WordPress" },
  { value: "Wix" },
  { value: "Weebly" },
  { value: "HubSpot" },
  { value: "Aritic Pinpoint" },
  { value: "ONTRAPORT" },
  { value: "Infusionsoft" },
  { value: "Ahrefs" },
  { value: "SEMRush" },
  { value: "SEO Power Suite" },
  { value: "Majestic" },
  { value: "Adobe Premiere" },
  { value: "Lightworks" },
  { value: "Apple iMovie" },
  { value: "Screaming Fog" },
  { value: "Netpeak Spider" },
  { value: "Lead Generation" },
  { value: "Prospecting" },
  { value: "Objection Handling" },
  { value: "Closing Techniques" },
  { value: "Growth Mindset" },
];
const designGroupData = [
  { value: "Aesthetics" },
  { value: "Attention to Detail" },
  { value: "Perceptivity" },
  { value: "Sketching" },
  { value: "Brainstorming" },
  { value: "Adobe Acrobat" },
  { value: "Adobe Creative Cloud" },
  { value: "Adobe Creative Suite" },
  { value: "Adobe Flash" },
  { value: "Adobe Illustrator" },
  { value: "Adobe InDesign" },
  { value: "Adobe Photoshop" },
  { value: "Canva" },
  { value: "CorelDRAW" },
  { value: "Crello" },
  { value: "Design Thinking" },
  { value: "Dreamweaver" },
  { value: "CSS" },
  { value: "HTML" },
  { value: "Powerpoint" },
  { value: "Quark" },
  { value: "QuarkXpress" },
  { value: "Photo Editing" },
  { value: "Video Editing" },
  { value: "Font Design" },
  { value: "Logo Design" },
  { value: "Layout Design" },
  { value: "Modifying Designs" },
  { value: "Spacing" },
  { value: "Color Sense" },
  { value: "Color Theory" },
  { value: "Screen Design" },
  { value: "Composition" },
  { value: "Generative Design" },
  { value: "Experience and Behaviour Design" },
  { value: "Design Strategy" },
  { value: "Animation" },
  { value: "Interface Design" },
  { value: "Infographics" },
  { value: "Digital Printing" },
  { value: "Illustration" },
  { value: "Ad Design" },
  { value: "Color Schemes" },
  { value: "iWork Keynote" },
  { value: "Photography" },
  { value: "DSLR Cameras" },
  { value: "Video production" },
  { value: "Proofreading" },
  { value: "Usability" },
  { value: "UI/UX Design" },
  { value: "Sound Design" },
  { value: "3D Design" },
  { value: "Responsive Design" },
  { value: "Service Design" },
];
const financeGroupData = [
  { value: "Accounting" },
  { value: "Averaging" },
  { value: "Budgeting" },
  { value: "Calculations" },
  { value: "Cash Flow Management" },
  { value: "Cost Analysis" },
  { value: "Cost Reduction" },
  { value: "Controlling" },
  { value: "Data Processing" },
  { value: "Financial Data" },
  { value: "GAAP" },
  { value: "Profit and Loss" },
  { value: "Quantitative Data" },
  { value: "Reconciliation" },
  { value: "Balance Sheet" },
  { value: "Reporting" },
  { value: "Sorting" },
  { value: "Tax Filing" },
  { value: "Tax Planning" },
  { value: "Tax Reporting" },
  { value: "Estimation" },
  { value: "Financial Analysis" },
  { value: "Financial Planning" },
  { value: "Forecasting" },
  { value: "Restructuring" },
  { value: "Risk Analysis" },
  { value: "Risk Management" },
  { value: "Scenario Planning" },
  { value: "Valuations" },
  { value: "Value-Added Analysis" },
  { value: "Venture Capital" },
  { value: "Modeling" },
  { value: "Hyperion" },
  { value: "SAP" },
  { value: "Compliance" },
  { value: "Investments" },
  { value: "Mergers and Aquisitions" },
  { value: "Taxation" },
];

const productGroupData = [
  { value: "Customer Discovery" },
  { value: "Market Research" },
  { value: "Business Intelligence and Analytics" },
  { value: "Product Innovation" },
  { value: "Agile Process Management" },
  { value: "Product Strategy" },
  { value: "Third-Party Integration" },
  { value: "Consumer Psychology" },
  { value: "Business Model Design" },
  { value: "Organisational Development" },
  { value: "Customer Interviews" },
  { value: "Design Sprints" },
  { value: "Roadmap Planning" },
  { value: "Resource Allocation" },
  { value: "Pricing" },
  { value: "Revenue Modeling" },
  { value: "KPI Definition" },
  { value: "KPI Tracking" },
  { value: "Stakeholder Management" },
  { value: "User Life Cycle Management" },
  { value: "User Experience Management" },
  { value: "Strategic Planning" },
];