import Head from 'next/head';

interface PageHeadProps {
  title: string;
}

const PageHead = ({ title }: PageHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/iconePastoral.ico" />
    </Head>
  );
};

export default PageHead;
