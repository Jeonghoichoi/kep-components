import { useState } from 'react';
import Selects from './selects/select';
import './index.less';

const SideBarSetting = () => {
  const modes = [
    {
      id: 1,
      name: 'Chat',
    },
    {
      id: 2,
      name: 'Complete',
    },
    {
      id: 3,
      name: 'Edit',
    },
  ];
  const models = [
    {
      id: 1,
      name: 'gpt-4o-mini',
    },
    {
      id: 2,
      name: 'gpt-4o-mini-2024-07-18',
    },
    {
      id: 3,
      name: 'gpt-3.5-turbo-16k',
    },
    {
      id: 4,
      name: 'gpt-3.5-turbo-1106',
    },
    {
      id: 5,
      name: 'gpt-3.5-turbo-0125',
    },
    {
      id: 6,
      name: 'gpt-3.5-turbo',
    },
    {
      id: 7,
      name: 'o1 and o1-mini',
    },
    {
      id: 8,
      name: 'GPT-4o-Realtime',
    },
    {
      id: 9,
      name: 'GPT-4o-Audio',
    },
    {
      id: 10,
      name: 'DALL E',
    },
    {
      id: 11,
      name: 'TTS',
    },
    {
      id: 12,
      name: 'Whisper',
    },
    {
      id: 13,
      name: 'Embeddings',
    },
    {
      id: 14,
      name: 'Moderation',
    },
    {
      id: 15,
      name: 'Deprecated',
    },
  ];

  const handleChangeTemperature = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(Number(event.target.value));
  };

  const handleChangeMaximumLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaximumLength(Number(event.target.value));
  };

  const handleChangeTopP = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopP(Number(event.target.value));
  };

  const handleChangeFrequencyPernalty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrequencyPernalty(Number(event.target.value));
  };

  const handleChangesetPresencePernalty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPresencePernalty(Number(event.target.value));
  };

  // mode name
  const [mode, setMode] = useState(modes[0]);
  // model name
  const [model, setModel] = useState(models[0]);
  // temperature cnt
  const [temperature, setTemperature] = useState<number>(0.23);
  // maximum length
  const [maximumLength, setMaximumLength] = useState<number>(0.45);
  // topP cnt
  const [topP, setTopP] = useState<number>(0.86);
  // frequency pernalty cnt
  const [frequencyPernalty, setFrequencyPernalty] = useState<number>(0.32);
  // Presence pernalty
  const [PresencePernalty, setPresencePernalty] = useState<number>(2.4);

  return (
    <>
      <div className="w-80 ml-4 p-4 flex h-full flex-col bg-white shadow-xl border-gray-300 border border-solid rounded-lg dark:bg-slate-900 dark:border-gray-300">
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <h2 className="text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Mode
            </h2>
            <Selects width="240" height="32" items={modes} selectedMeta={mode} onChange={setMode}></Selects>
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Model
            </h2>
            <Selects width="240" height="32" items={models} selectedMeta={model} onChange={setModel}></Selects>
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="flex text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Temperature <div className="ml-auto">{temperature}</div>
            </h2>
            <label htmlFor="range" className="hidden mb-2 text-lg font-medium">
              {temperature}
            </label>
            <input
              id="range"
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={temperature}
              onChange={handleChangeTemperature}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="flex text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              MaximumLength <div className="ml-auto">{maximumLength}</div>
            </h2>
            <label htmlFor="range" className="hidden mb-2 text-lg font-medium">
              {maximumLength}
            </label>
            <input
              id="range"
              type="range"
              min="0"
              max="1.5"
              step="0.01"
              value={maximumLength}
              onChange={handleChangeMaximumLength}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="flex text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              TopP <div className="ml-auto">{topP}</div>
            </h2>
            <label htmlFor="range" className="hidden mb-2 text-lg font-medium">
              {topP}
            </label>
            <input
              id="range"
              type="range"
              min="0"
              max="3.2"
              step="0.01"
              value={topP}
              onChange={handleChangeTopP}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="flex text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              FrequencyPernalty <div className="ml-auto">{frequencyPernalty}</div>
            </h2>
            <label htmlFor="range" className="hidden mb-2 text-lg font-medium">
              {frequencyPernalty}
            </label>
            <input
              id="range"
              type="range"
              min="0"
              max="8.2"
              step="0.01"
              value={frequencyPernalty}
              onChange={handleChangeFrequencyPernalty}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="flex text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              PresencePernalty <div className="ml-auto">{PresencePernalty}</div>
            </h2>
            <label htmlFor="range" className="hidden mb-2 text-lg font-medium">
              {PresencePernalty}
            </label>
            <input
              id="range"
              type="range"
              min="0"
              max="4.5"
              step="0.01"
              value={PresencePernalty}
              onChange={handleChangesetPresencePernalty}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarSetting;
