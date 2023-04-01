import type { FC } from "react";
import Head from "next/head";

type IProps = {
  title: string;
  description?: string;
};

const MetaTag: FC<IProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaTag;
