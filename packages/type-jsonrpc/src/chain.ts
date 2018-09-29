// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, CreateItemOptionsMap, Section, SectionItems } from '@polkadot/params/types';
import { Interfaces, Interface$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const getHeader: CreateItemOptions = {
  description: 'Get header of a relay chain block.',
  params: [param('hash', 'Hash')],
  type: 'Header'
};

const getBlock: CreateItemOptions = {
  description: 'Get header and body of a relay chain block',
  params: [param('hash', 'Hash')],
  type: 'SignedBlock'
};

const getBlockHash: CreateItemOptions = {
  description: 'Get header and body of a relay chain block',
  params: [param('blockNumber', 'BlockNumber')],
  type: 'Hash'
};

// getBlockHash 的别名
const getHead: CreateItemOptions = {
  description: 'By default returns latest block hash',
  params: [],
  type: 'Hash'
};

// @TODO 新增 RuntimeVersion 类型
// const getRuntimeVersion: CreateItemOptions = {
//   description: 'Get the runtime version',
//   params: [
//     param('hash', 'Hash')
//   ],
//   type: 'RuntimeVersion'
// };

const newHead: CreateItemOptions = {
  description: 'Retrieves the best header via subscription',
  subscribe: ['chain_subscribeNewHead', 'chain_unsubscribeNewHead'],
  params: [],
  type: 'Header'
};

const privateMethods: CreateItemOptionsMap = {};

const publicMethods: CreateItemOptionsMap = {
  getHeader,
  getBlock,
  getBlockHash,
  getHead,
  newHead
};

export type PublicMethods = typeof publicMethods;
export type PrivateMethods = typeof privateMethods;

/**
 * @summary Methods to retrieve chain data.
 */
export default (name: Interface$Sections): Section<Interfaces, PrivateMethods, PublicMethods> =>
  createSection(name)((createMethod: CreateItems<Interfaces>) => ({
    description: 'Retrieval of chain data',
    public: Object.keys(publicMethods).reduce(
      (result, key) => {
        result[key] = createMethod(key)(publicMethods[key]);

        return result;
      },
      {} as SectionItems<Interfaces, PublicMethods>
    )
  }));
