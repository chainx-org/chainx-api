// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import createSection from '@polkadot/params/section';

const now: CreateItemOptions = {
  description: `Current time for the current block.`,
  key: 'Timestamp Now',
  params: [],
  type: 'Timestamp'
};

const blockPeriod: CreateItemOptions = {
  description: `The minimum (and advised) period between blocks.`,
  key: 'Timestamp BlockPeriod',
  params: [],
  type: 'Timestamp'
};

const didUpdate: CreateItemOptions = {
  description: `Did the timestamp get updated in this block?`,
  key: 'Timestamp DidUpdate',
  params: [],
  type: 'bool'
};

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'Timestamp related entries',
    public: {
      now: createMethod('now')(now),
      blockPeriod: createMethod('blockPeriod')(blockPeriod),
      didUpdate: createMethod('didUpdate')(didUpdate)
    }
  }));
