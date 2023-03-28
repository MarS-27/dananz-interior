import { GridContent } from "@/styles/layout";
import { FontSemiBold_3xl, FontBold_4xl } from "@/styles/typography";
import Layout from "components/Layout";
import styled from "styled-components";

const ErrorPageSection = styled(GridContent)`
  text-align: center;
`;

export default function Page404() {
  return (
    <Layout>
      <ErrorPageSection>
        <FontBold_4xl>404</FontBold_4xl>
        <FontSemiBold_3xl>Page Not Found!</FontSemiBold_3xl>
      </ErrorPageSection>
    </Layout>
  );
}
