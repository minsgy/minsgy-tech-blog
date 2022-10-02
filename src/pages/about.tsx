import React from "react";
import Layout from "@theme/Layout";
import { CustomLayout } from "../layouts/CustomLayout";
import { ProfileCard } from "../components/ProfileCard";
const About = () => {
  return (
    <Layout>
      <CustomLayout maxWidth={660}>
        <ProfileCard name="최민석" />
      </CustomLayout>
    </Layout>
  );
};

export default About;
