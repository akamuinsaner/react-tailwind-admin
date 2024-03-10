import ScrollPage from "@/src/components/ScrollPage";
import Page from "@/src/components/Page";
import Nav from "./pageSec/Nav";
import Side from "./pageSec/Side";
import Content from "@/src/components/Content";
import { ReactNode } from "react";

export default function App({
    children
}: {
    children: ReactNode
}) {
  return (
    <ScrollPage>
      <Page className="pt-20 pl-64">
        <Nav />
        <Side />
        <Content>
            {children}
        </Content>
      </Page>
    </ScrollPage>
  );
}
