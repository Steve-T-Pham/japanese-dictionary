import React from 'react';
import Link from 'next/link';

const Definition = ({ definition }: {definition: any}) =>{

    const englishDefinitions = definition.senses.map((sense: any) => sense.english_definitions);

    const handleClick = () => {
        console.log(definition);
    }

    return(

        //word + definition + jlpt level categories + misc info container
        <div className="flex container rounded border-2 mx-auto my-4 border-grey pt-2 pb-2 hover:cursor-pointer hover:border-cyan-500">
            {/* wrap it in a link in order to make the entire component be able to redirect to a path with the definition */}
            <Link href="/definition/[slug]" as={`/definition/${definition.slug}`} passHref onClick={handleClick}>

            <div className="flex w-full">
                {/* word display + misc info */}
                <div className="flex-shrink-0 mr-10 ml-4">
                    <div className="text-sm">{definition.japanese[0].reading}</div>
                    <div className="font-bold text-2xl">{definition.slug}</div>
                    <div>
                        {definition.jlpt.map((level: any) => <div className="rounded-full bg-cyan-500 text-center my-1 w-fit text-sm px-1.5" key={definition.level}>{level}</div>)}
                    </div>
                    <div className="rounded-full bg-red-400 text-center my-1 w-fit text-sm px-1.5">{definition.senses[0].parts_of_speech[0]}</div>
                </div>
                    
                {/* entire definition array of a word given in bullet point list */}
                <div className="flex-grow">
                    <ol className="list-decimal column-count-5 column-gap-4 ">
                        {englishDefinitions.map((definitions: any) =>
                            definitions.map((definition: any) => <li key={definition.slug}>{definition}</li>)
                        )}
                    </ol>
                </div>

                </div>
            </Link>
        </div>
        
    );
}

export default Definition;
