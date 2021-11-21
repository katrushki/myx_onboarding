import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Vibration,
  TouchableOpacity,
} from "react-native";

import _ from "lodash";
import { SelectMultipleGroupButton } from "react-native-selectmultiple-button";
import LogoOBS from "../../components/LogoOBS";
import { Ionicons } from "@expo/vector-icons";
import Images from "../../../assets/Images";

const defaultSelectedIndex_group_interest = [];

export default class HomeGB extends Component {
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
        source={Images.prematchBackground}
        resizeMode="cover"
        resizeMethod="auto"
        style={styles.viewStyle}
      >
        {/**header navigation */}
        <View flex={0.25} flexDirection={"row"} style={styles.viewLogoStyle}>
          <Image style={styles.logoStyle} source={Images.logo_s} />
        </View>
        <View style={styles.viewHeaderStyle}>
          <Text style={styles.headerText}>
            Select the tags that you want to be matched with into the designated
            field
          </Text>
        </View>

        {/**Group button implementation */}
        <ScrollView style={{ flex: 20 }}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 10,
              color: "#5E18EA",
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
              borderColor: "#5E18EA",
              backgroundColor: "transparent",
              textColor: "#5E18EA",
              borderTintColor: "#FFF",
              backgroundTintColor: "#5E18EA",
              textTintColor: "#FFF",
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
              color: "#5E18EA",
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
              borderColor: "#5E18EA",
              backgroundColor: "transparent",
              textColor: "#5E18EA",
              borderTintColor: "#FFF",
              backgroundTintColor: "#5E18EA",
              textTintColor: "#FFF",
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
              color: "#5E18EA",
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
              borderColor: "#5E18EA",
              backgroundColor: "transparent",
              textColor: "#5E18EA",
              borderTintColor: "#FFF",
              backgroundTintColor: "#5E18EA",
              textTintColor: "#FFF",
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
              color: "#5E18EA",
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
              borderColor: "#5E18EA",
              backgroundColor: "transparent",
              textColor: "#5E18EA",
              borderTintColor: "#FFF",
              backgroundTintColor: "#5E18EA",
              textTintColor: "#FFF",
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
              color: "#5E18EA",
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
              borderColor: "#5E18EA",
              backgroundColor: "transparent",
              textColor: "#5E18EA",
              borderTintColor: "#FFF",
              backgroundTintColor: "#5E18EA",
              textTintColor: "#FFF",
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
              color: "#5E18EA",
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
              borderColor: "#5E18EA",
              backgroundColor: "transparent",
              textColor: "#5E18EA",
              borderTintColor: "#FFF",
              backgroundTintColor: "#5E18EA",
              textTintColor: "#FFF",
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
              color: "#5E18EA",
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
              borderColor: "#5E18EA",
              backgroundColor: "transparent",
              textColor: "#5E18EA",
              borderTintColor: "#FFF",
              backgroundTintColor: "#5E18EA",
              textTintColor: "#FFF",
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

        <View style={styles.viewButtonStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPressOut={Vibration.vibrate(50)}
            onPress={() => {
              this.props.navigation.navigate("Matching");
            }}
          >
            <Text style={styles.buttonText}>Let's get you myxed! </Text>
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
  viewHeaderStyle: {
    flex: 0.1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonStyle: {
    backgroundColor: "#6C2BEC",
    height: 60,
    width: 300,
    borderRadius: 13,
    justifyContent: "space-evenly"
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
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
    fontSize: 15,
    fontWeight: 'bold',
    color: "#FFF",
    textAlign: "center",
    alignContent: 'center'
  },
  iconStyle: {
    color: "#FFF",
    opacity: 0.75,
  },
  logoStyle: {
    height: 60,
    width: 55,
    marginTop: 50,
    alignItems: "center",
  },
  viewLogoStyle: {
    alignContent: "flex-start",
    justifyContent: "center",
  },
  viewButtonStyle: {
    flex: 0.25,
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

// list of arrays

const techGroupData = [
  { value: "Agile Methodology" },
  { value: "Algorithms" },
  { value: "Blockchain" },
  { value: "C#" },
  { value: "C/C++" },
  { value: "Configuration" },
  { value: "Data Science" },
  { value: "Debugging" },
  { value: "Documentation" },
  { value: "Flutter" },
  { value: "Go" },
  { value: "Google Suite" },
  { value: "Implementation" },
  { value: "Java" },
  { value: "Javascript" },
  { value: "JIRA" },
  { value: "Machine Learning" },
  { value: "Mobile Development" },
  { value: "Perl" },
  { value: "PHP" },
  { value: "Python" },
  { value: "QA testing" },
  { value: "R" },
  { value: "React Native" },
  { value: "Requirements Engineering" },
  { value: "Ruby" },
  { value: "Rust" },
  { value: "Salesforce" },
  { value: "Scrum" },
  { value: "Security" },
  { value: "Slack" },
  { value: "Solidity" },
  { value: "SQL" },
  { value: "Swift" },
  { value: "Tableau" },
  { value: "Testing" },
  { value: "Trello" },
];

const talentGroupData = [
  { value: "Acquisition" },
  { value: "Change Management" },
  { value: "Employer Branding" },
  { value: "Engagement" },
  { value: "Intercultural Management" },
  { value: "Internal Mobility" },
  { value: "Knowledge Management" },
  { value: "Organisational Behaviour" },
  { value: "Organisational Culture" },
  { value: "Perfomance Management" },
  { value: "Promotion & Transition" },
  { value: "Remuneration Strategy" },
  { value: "Reskilling" },
  { value: "Retention" },
  { value: "Succession" },
  { value: "Training & Development" },
  { value: "Upskilling" },
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
  { value: "Negotiation" },
  { value: "Networking" },
  { value: "Operations" },
  { value: "Persuasion" },
  { value: "Planning" },
  { value: "Presentation" },
  { value: "Problem Solving" },
  { value: "Process Management" },
  { value: "Project Management" },
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
