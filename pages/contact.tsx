import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getContactUs } from "@/sanity/queries/getContactUs";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

export async function getStaticProps() {
  const contactUsContent = await getContactUs();
  return {
    props: {
      contactUsContent,
    },
    revalidate: 60, // Re-generate the post every minute
  };
}

type Props = {
  contactUsContent: {
    title: string;
    topImageUrl: string;
    topImageAlt: string;
    body: any;
    bottomImageUrl: string;
    bottomImageAlt: string;
  }[];
};

const Contact = ({ contactUsContent }: Props) => {
  return (
    <div>
      <Navbar />
      <Layout>
        {contactUsContent.map((content) => (
          <div key={content.title} className="mt-20 lg:mt-52 p-4 text-center text-gray-700">
            <h2 className={inter.className + " text-7xl font-extrabold text-gray-800"}>
              {content.title}
            </h2>
            <div className="mx-auto shadow-lg rounded-lg overflow-hidden mb-8">
              <Image
                src={content.topImageUrl}
                alt={content.topImageAlt}
                width={1200}
                height={800}
              />
            </div>
            <div className="prose prose-lg mx-auto text-left">
              <PortableText value={content.body} />
            </div>
            <div className="mx-auto shadow-lg rounded-lg overflow-hidden mt-8 mb-8">
              <Image
                src={content.bottomImageUrl}
                alt={content.bottomImageAlt}
                width={600}
                height={400}
              />
            </div>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export default Contact;
