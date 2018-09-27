// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Storages, Storage$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const accountNonce: CreateItemOptions = {
  description: ``,
  key: 'System AccountNonce',
  params: [param('who', 'AccountId')],
  type: 'AccountIndex'
};

const extrinsicCount: CreateItemOptions = {
  description: ``,
  key: 'System ExtrinsicCount',
  params: [],
  type: 'u32'
};

const blockHash: CreateItemOptions = {
  description: ``,
  key: 'System BlockHash',
  params: [param('blockNumber', 'BlockNumber')],
  type: 'Hash'
};

const extrinsicData: CreateItemOptions = {
  description: ``,
  key: 'System ExtrinsicData',
  params: [param('extrinsic', 'u32')],
  type: 'Bytes'
};

const randomSeed: CreateItemOptions = {
  description: ``,
  key: 'System RandomSeed',
  params: [],
  type: 'Hash'
};

// tslint:disable-next-line:variable-name
const number: CreateItemOptions = {
  description: 'The current block number being processed. Set by `execute_block`.',
  key: 'System Number',
  params: [],
  type: 'BlockNumber'
};

const parentHash: CreateItemOptions = {
  description: ``,
  key: 'System ParentHash',
  params: [],
  type: 'Hash'
};

const extrinsicsRoot: CreateItemOptions = {
  description: ``,
  key: 'System ExtrinsicsRoot',
  params: [],
  type: 'Hash'
};

const digest: CreateItemOptions = {
  description: ``,
  key: 'System Digest',
  params: [],
  type: 'Digest'
};

// EventRecord
// const events: CreateItemOptions = {
//   description: ``,
//   key: 'System Events',
//   params: [],
//   type: ['EventRecord']
// };

export default (name: Storage$Sections): Section<Storages, any, any> =>
  createSection(name)((createMethod: CreateItems<Storages>) => ({
    description: 'System',
    public: {
      accountNonce: createMethod('accountNonce')(accountNonce),
      extrinsicCount: createMethod('extrinsicCount')(extrinsicCount),
      blockHash: createMethod('blockHash')(blockHash),
      extrinsicData: createMethod('extrinsicData')(extrinsicData),
      randomSeed: createMethod('randomSeed')(randomSeed),
      number: createMethod('number')(number),
      parentHash: createMethod('parentHash')(parentHash),
      extrinsicsRoot: createMethod('extrinsicsRoot')(extrinsicsRoot),
      digest: createMethod('digest')(digest)
      // events: createMethod('events')(events)
    }
  }));
