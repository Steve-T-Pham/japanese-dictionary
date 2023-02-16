import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface DefinitionData {
  slug: string;
  senses: {
    parts_of_speech: string[];
    english_definitions: string[];
  }[];
}

const DefinitionPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [definition, setDefinition] = useState<DefinitionData>();

  useEffect(() => {
    const fetchDefinition = async () => {
      console.log(slug);
      const res = await fetch(`http://localhost:5000/search?q=${slug}`);
      const data = await res.json();
      setDefinition(data.data);
      console.log("Test:" + definition)};
    if (slug) {
      fetchDefinition();
    }
  }, [slug]);

  if (!definition) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>JP Dictionary | {definition.slug || "Loading"}</title>
        <meta name="keywords" content="defintions"></meta>
      </Head>

      <div>
        <h1 className="text-4xl">{definition.slug}</h1>
        {definition.senses && definition.senses.map((sense) => (
          <div key={sense.parts_of_speech[0]}>
            <h2 className="text-2xl font-bold">{sense.parts_of_speech[0]}</h2>
            <ul>
              {sense.english_definitions.map((def) => (
                <li key={def}>{def}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default DefinitionPage;