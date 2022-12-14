import React from 'react';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { workerData } from 'worker_threads';
import "../index.css";

const Definition = ({ definition }: {definition: any}) =>{

    const englishDefinitions = definition.senses.map((sense: any) => sense.english_definitions);

    return(
        <div className="container rounded border-2 w-4/5 mx-auto my-4 border-grey pt-2 pb-2 hover:cursor-pointer hover:border-cyan-500 flex">

            <div className="mr-10 ml-4 my-auto mx-auto flex-col w-1/6">
                <div className="text-sm">{definition.japanese[0].reading}</div>
                <div className="font-bold text-2xl">{definition.slug}</div>
                <div>
                    {definition.jlpt.map((level: any) => <div className="rounded-full bg-cyan-500 text-center my-1 w-fit text-sm px-1.5">{level}</div>)}
                </div>
                <div className="rounded-full bg-red-400 text-center my-1 w-fit text-sm px-1.5">{definition.senses[0].parts_of_speech[0]}</div>
            </div>
            
            <div className="flex flex-grow-1">
                <ol className="list-decimal flex-1 column-count-5 column-gap-4">
                    {englishDefinitions.map((definitions: any) =>
                        definitions.map((definition: any) => <li key={definition}>{definition}</li>)
                    )}
                </ol>
            </div>

        </div>
    );
}

export default Definition;
